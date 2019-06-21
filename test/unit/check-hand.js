'use strict'

const checkHand = require('../../src/check-hand')
const { expect } = require('chai')
const constants = require('../../src/constants')

describe('test winning hands in poker', function () {
  it('test straigt flush', function () {
    const hand = ['11-S', '10-S', '9-S', '8-S', '7-S']
    const resultString = checkHand(hand)
    expect(resultString).to.equal('straight flush')
    const hand2 = ['12-S', '1-S', '13-S', '10-S', '11-S']
    expect(checkHand(hand2)).to.equal(constants.STRAIGHT_FLUSH)
  })
  it('test four of a kind', function () {
    const hand = ['11-S', '11-D', '11-H', '11-C', '10-S']
    const resultString = checkHand(hand)
    expect(resultString).to.equal(constants.FOUR_OF_A_KIND)
  })

  it('test full house', function () {
    const hand = ['11-S', '11-D', '11-H', '5-C', '5-S']
    const resultString = checkHand(hand)
    expect(resultString).to.equal(constants.FULL_HOUSE)
  })

  it('test flush', function () {
    const hand = ['5-S', '2-S', '13-S', '7-S', '11-S']
    const resultString = checkHand(hand)
    expect(resultString).to.equal(constants.FLUSH)
  })

  it('test straight', function () {
    const hand = ['9-H', '7-C', '5-H', '6-D', '8-S']
    const resultString = checkHand(hand)
    expect(resultString).to.equal(constants.STRAIGHT)
  })

  it('test three of a kind', function () {
    const hand = ['11-S', '11-D', '11-H', '2-C', '10-S']
    const resultString = checkHand(hand)
    expect(resultString).to.equal(constants.THREE_OF_A_KIND)
  })

  it('test two pairs', function () {
    const hand = ['11-S', '11-D', '10-H', '2-C', '10-S']
    const resultString = checkHand(hand)
    expect(resultString).to.equal(constants.TWO_PAIR)
  })

  it('test one pair', function () {
    const hand = ['11-S', '11-D', '5-H', '4-C', '3-S']
    const resultString = checkHand(hand)
    expect(resultString).to.equal(constants.ONE_PAIR)
  })

  it('test high card', function () {
    const hand = ['11-S', '10-D', '5-H', '4-C', '3-S']
    const resultString = checkHand(hand)
    expect(resultString).to.equal(constants.HIGH_CARD)
  })
})
