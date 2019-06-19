const { checkHand } = require('../src/check-hand')
const { expect } = require('chai')

describe('test winning hands in poker', function () {
  it('test straigt flush', function () {
    const hand = ['11-S', '10-S', '9-S', '8-S', '7-S']
    const resultString = checkHand(hand)
    expect(resultString).to.equal('straight flush')
    const hand2 = ['12-S', '1-S', '13-S', '10-S', '11-S']
    expect(checkHand(hand2)).to.equal('straight flush')
  })
})
