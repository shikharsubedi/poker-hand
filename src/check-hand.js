'use strict'

const { parseHand } = require('./parse-cards')
const { HIGH_CARD } = require('./constants')
const { fourOfAKind, checkFullHouse, threeOfAKind, checkTwoPair, checkOnePair } = require('./check-count')
const { checkStraightFlush, isFlush, checkStraight } = require('./straight-flush')

/**
 * This method determines the type of hand dealt to a player
 * @param {Array} hand Array of strings representing cards
 * @returns {String} the string returned. the string returned is defined in the src/constants.js file
 */
function checkHand (hand) {
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
    checkStraightFlush,
    fourOfAKind,
    checkFullHouse,
    isFlush,
    checkStraight,
    threeOfAKind,
    checkTwoPair,
    checkOnePair
  ]
}

module.exports = checkHand
