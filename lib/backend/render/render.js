import domify from 'domify'
import merge from 'merge'
import t from 't-component'
import urlBuilder from 'lib/backend/url-builder'
import user from 'lib/user/user'
import config from 'lib/config/config'
import tagImages from 'lib/tags-images'

/**
 * Render default modules
 */

export default function render (template, options) {
  const defaults = {
    user,
    t,
    tagImages,
    config,
    urlBuilder
  }

  return template(merge(defaults, options))
}

export function dom (template, options) {
  return domify(render(template, options))
}

/**
 * Alias dom method so it doesnt conflicts with 'component-dom' module.
 */

export { dom as domRender }