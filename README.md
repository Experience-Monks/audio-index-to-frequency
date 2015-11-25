# audio-index-to-frequency

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Convert an index to Hz frequency for WebAudio frequency analysis. Also see [audio-frequency-to-index](https://www.npmjs.com/package/audio-frequency-to-index).

```js
const index2freq = require('audio-index-to-frequency')
const sampleRate = audioContext.sampleRate // 44100
const length = analyserNode.frequencyBinCount // 1024

const freq = index2freq(19, sampleRate, length)
//=> 409.130859375
```

## Usage

[![NPM](https://nodei.co/npm/audio-index-to-frequency.png)](https://www.npmjs.com/package/audio-index-to-frequency)

#### `frequency = indexToFrequency(index, sampleRate, frequencyBinCount)`

Converts the `index` integer to a `frequency` (in Hz) with the given `audioContext.sampleRate` and `analyserNode.frequencyBinCount` from the WebAudio API.

## License

MIT, see [LICENSE.md](http://github.com/Jam3/audio-index-to-frequency/blob/master/LICENSE.md) for details.
