var freeport = require('freeport')
  , assert = require('assert')

exports['sanity'] = function(done) {
  freeport(function(er, port) {
    assert(er === null)
    assert(typeof port === 'number')
    assert(port !== 0)
    done()
  })
}
