'use strict'

const { parseCards } = require('./parse-cards')
const constants = require('./constants')
const { fourOfAKind, checkFullHouse, threeOfAKind, checkTwoPair, checkOnePair, getCountMap } = require('./check-count')
const { checkStraightFlush, isFlush, checkStraight } = require('./straight-flush')

/**
 * This method determines the type of hand dealt to a player
 * @param {Array} hand Array of strings representing cards
 * @returns {String} the string returned. the string returned is defined in the src/constants.js file
 */
function checkHand (hand) {
  const cards = parseCards(hand)
  const countMap = getCountMap(cards)
  let result = constants.HIGH_CARD

  if (checkStraightFlush(cards)) {
    result = constants.STRAIGHT_FLUSH
  } else if (fourOfAKind(countMap)) {
    result = constants.FOUR_OF_A_KIND
  } else if (checkFullHouse(countMap)) {
    result = constants.FULL_HOUSE
  } else if (isFlush(cards)) {
    result = constants.FLUSH
  } else if (checkStraight(cards)) {
    result = constants.STRAIGHT
  } else if (threeOfAKind(countMap)) {
    result = constants.THREE_OF_A_KIND
  } else if (checkTwoPair(countMap)) {
    result = constants.TWO_PAIR
  } else if (checkOnePair(countMap)) {
    result = constants.ONE_PAIR
  }
  return result
}

module.exports = checkHand
