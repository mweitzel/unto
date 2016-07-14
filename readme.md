# unto

This library extends `Object.prototype` with a single function, `unto`.
`unto` accepts a callback, and calls it with the object it was called on.

All objects can method chain with anonymous callbacks.

## Installation

```
npm install unto
```

## Example

```js
require('unto').englobal()
// this defines a getter on Object.prototype which binds context

[ 'all things whatsoever ye desire'
, 'that men should do'
].unto((you) =>
  you.concat('so shall ye do')
).unto((them) =>
  them.concat('for this is the law and the prophets')
)
/* -->
[ 'all things whatsoever ye desire',
  'that men should do',
  'so shall ye do',
  'for this is the law and the prophets' ]
*/
```

The object is already bound to unto, so you can `.bind(null, callback)` and call it later.

Also, all extra arguments will make it through.

It inverts parameters on a callback.

```js
"I".unto.bind(null,
  (myself, virtues) =>
    [myself, ', today, the ', virtues].join('')
)('starlit heaven')
// -> "I, today, the starlit heaven"
```
