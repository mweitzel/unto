var unto = require('./index')
    unto.englobal()

require('underbind').englobal()

var test = require('tape')
  , object = { foo: 'bar' }

test('king james', (t) => (
  t.deepEquals(
    [ 'all things whatsoever ye desire'
    , 'that men should do'
    ].unto((you) =>
      you.concat([
        'so also shall ye do unto them'
      , 'for this is the law and the prophets'
      ])
    )
  , [ 'all things whatsoever ye desire'
    , 'that men should do'
    , 'so also shall ye do unto them'
    , 'for this is the law and the prophets'
    ]
  )
, t.end()
))

test('calls callback with object', t =>
  object.unto((obj) => (
    t.deepEquals(
      obj
    , object
    )
  , t.end()
  ))
)

test('unto can standalone, without implicit context chaining', function(t) {
  var object_unto = object.unto
  object_unto((obj) => (
    t.deepEquals(
      obj
    , object
    )
  , t.end()
  ))
})

test('with an underbound cb, calls cb with object', t =>
  object.unto._bind((obj, a, b, c) => (
    t.deepEquals(
      obj
    , object
    )
  , t.end()
  ))()
)

test('with an underbound cb and other args, calls cb with object and other args', t =>
  object.unto._bind((obj, a, b, c) => (
    t.deepEquals(
      [obj, a, b, c]
    , [object, 1, 2, 3]
    )
  , t.end()
  ))(1,2,3)
)

test('works as expecte on strings, does not split into array', t => (
  t.equals(
    'asdf'.unto(String.prototype.toUpperCase.call.bind(String.prototype.toUpperCase))
  , 'ASDF'
  )
, t.end()
))

test('englobal is safe to call multiple times', (t) => (
  unto.englobal()
, unto.englobal()
, t.end()
))
