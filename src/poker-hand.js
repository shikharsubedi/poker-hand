'use strict'

const { parseHand } = require('./parse-hand')
const { HIGH_CARD } = require('./constants')
const { fourOfAKind, fullHouse, threeOfAKind, twoPair, onePair } = require('./check-count')
const { straightFlush, flush, straight } = require('./straight-flush')

/**
 * This method determines the type of hand dealt to a player
 * @param {Array} hand Array of strings representing cards
 * @returns {String} the string returned. the string returned is defined in the src/constants.js file
 */
function pokerHand (hand) {
  const parsedHand = parseHand(hand)
  const testMethods = getTestMethods()

  for (let testMethod of testMethods) {
    if (testMethod(parsedHand)) {
      return testMethod.returnString
    }
  }
  return HIGH_CARD
}
/**
 * This method returns an array of the test methods
 * ordered according to priority
 * @returns {Array} the array of methods ordered according to priority
 */
function getTestMethods () {
  return [
    straightFlush,
    fourOfAKind,
    fullHouse,
    flush,
    straight,
    threeOfAKind,
    twoPair,
    onePair
  ]
}

module.exports = pokerHand
