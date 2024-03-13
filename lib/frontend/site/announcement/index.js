const express = require('express')
const urlBuilder = require('lib/backend/url-builder')
const visibility = require('lib/visibility')

const app = module.exports = express()

app.get(urlBuilder.for('site.announcement'), visibility, require('lib/frontend/site/layout'))
