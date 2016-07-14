'use strict'

var once = require('once')

module.exports = unto

function unto(cb, ...rest) {
  return cb.bind(null, this).apply(null, rest)
}

unto.englobal = once(() =>
  Object.defineProperty(
    Object.prototype
  , 'unto'
  , { get: function() { return module.exports.bind(this) } }
  )
)
