var index2freq = require('./')
var test = require('tape')

test('converts an index to Hz frequency for WebAudio', function (t) {
  t.equal(index2freq(19, 44100, 512), 818.26171875)
  t.equal(index2freq(512, 44100, 512), 22050)
  t.equal(index2freq(19, 44100, 1024), 409.130859375)
  t.equal(index2freq(0, 44100, 512), 0)
  t.equal(index2freq(95, 44100, 512), 4091.30859375)
  t.equal(index2freq(1024, 44100, 512), 44100)
  t.end()
})
