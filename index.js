const debug = require('debug')
const config = require('lib/config')
const server = require('lib/backend/server')
const checkNodeVersion = require('lib/backend/check-node-version')
const migrations = require('lib/backend/migrations')
const models = require('lib/backend/models')()

const log = debug('democracyos:root')

// Basic server configuration
const opts = {
  port: process.env.PORT || config.publicPort,
  protocol: config.protocol,
  https: config.https
}

if (module === require.main) {
  checkNodeVersion()
    .then(models.ready())
    .then(migrations.ready())
    .then(() => {
      server(opts, function (err) {
        if (err) throw err

        log('DemocraciaOS server running...')
      })
    })
    .catch((err) => {
      console.error(err)
      process.exit(1)
    })
}
