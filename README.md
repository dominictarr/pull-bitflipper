# pull-bitflipper

pull stream that randomly flips bits in input stream,
useful for testing authenticated cryptography.

## Example

``` js
var bitflipper = require('pull-bitflipper')

pull(
  //create a source that calls a callback when it gets aborted.
  source(function onAbort(err) {
    //this should be called when the output fails because a bit was filpped.
  }),

  createEncryptStream(),

  //pass in the probability that a particular message should
  //contain a flipped bit.
  bitflipper(prop = 0.1),

  createDecryptStream(),

  sink(function (err) {
    //the sink should error when the decryption stream
    //finds a packet that does not authenticate.
  })
)

```

## License

MIT
