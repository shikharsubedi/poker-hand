'use strict'

const { parseCards, getCountMap } = require('./parse-cards')
const constants = require('./constants')

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
  } else if (checkFlush(cards)) {
    result = constants.FLUSH
  } else if (checkStraight(cards)) {
    result = constants.STRAIGHT
  } else if (threeOfAKind(countMap)) {
    result = constants.THREE_OF_A_KIND
  } else if (checkTwoPair(countMap)) {
    result = constants.TWO_PAIR
  } else if (checkOnePair(cards)) {
    result = constants.ONE_PAIR
  }
  return result
}
/**
 * checks for four of a kind in the hand
 * @param {Map} countMap map of card values and their frequency in the hand
 * @returns {Boolean}
 */
function fourOfAKind (countMap) {
  const count = Math.max(...countMap.values())
  return count === 4
}
/**
 * checks if there is a full house
 * Full house is one where there is  three of a kind
 * and a also a pair in the hand
 * @param {Map} countMap map of values and their frequency
 * @returns {Boolean}
 */
function checkFullHouse (countMap) {
  const values = [...countMap.values()]
  values.sort()
  const max = values.pop()
  const second = values.pop()
  return (max === 3 && second === 2)
}

/**
 *This method checks if the hand is a flush
 * A flush is when the cards are all of the same suite
 * @param {Array} cards The array of card objects
 * @returns {Boolean}
 */
function checkFlush (cards) {
  return isFlush(cards)
}
/**
 * This method checks if the hand has consecutive numbers but different suites
 * @param {Array} cards array of card objects
 * @return {Boolean}
 */
function checkStraight (cards) {
  return isSequence(cards)
}
/**
 * TODO
 * @param {Array} cards
 */
function checkTwoPair (cards) {
  return false
}
/**
 * TODO
 * @param {Map} countMap
 */
function threeOfAKind (countMap) {
  return false
}
/**
 * TODO
 * @param {Map} countMap
 */
function checkOnePair (countMap) {
  return false
}

/**
 * This method checks if the cards are a sequence and also of the same suite
 * @param {Array} cards Array of card objects
 * @returns {Boolean}
 */
function checkStraightFlush (cards) {
  return isFlush(cards) && isSequence(cards)
}
/**
 * checks whether the card values form a sequence
 * @param {Array} cards Array of card objects
 * @return {Boolean}}
 */
function isSequence (cards) {
  const biggestSequence = [1, 10, 11, 12, 13]
  const values = cards.map(card => card.value)
  values.sort((a, b) => {
    if (a > b) {
      return 1
    }
    if (a < b) {
      return -1
    }
    return 0
  })
  if (equalValues(biggestSequence, values)) {
    return true
  }
  return isConsecutive(values)
}
/**
 *@param {Array} the array of values
 *@param {Array} the second array of values
 *@returns {Boolean}
 */
function equalValues (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
}

/**
 * This method checks if the cards in a hand are consecutive
 * @param {Array} values the values in a hand
 * @return {Boolean}
 */
function isConsecutive (values) {
  let firstValue = values.shift()
  for (let value of values) {
    if (!(value === ++firstValue)) {
      return false
    }
    return true
  }
}
/**
 * checks whether the cards are all of the same suite
 * @param {Array} cards Array of card objects
 * @return {Boolean}}
 */
function isFlush (cards) {
  const suites = cards.map(card => card.suite)
  const suite = suites[0]
  let result = suites.reduce((soFar, current) => {
    return soFar && (current === suite)
  }, true)
  return result
}

module.exports = checkHand
