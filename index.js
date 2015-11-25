module.exports = indexToFrequency
function indexToFrequency (index, sampleRate, frequencyBinCount) {
  return index * sampleRate / (frequencyBinCount * 2)
}
