'use strict'
const constants = require('./constants')

/**
 * checks for four of a kind in the hand
 * @param {Map} countMap map of card values and their frequency in the hand
 * @returns {Boolean}
 */
function fourOfAKind (parsedHand) {
  const count = Math.max(...parsedHand.countMap.values())
  return count === 4
}
/**
 * checks if there is a full house
 * Full house is one where there is  three of a kind
 * and a also a pair in the hand
 * @param {Map} countMap map of values and their frequency
 * @returns {Boolean}
 */
function checkFullHouse (parsedHand) {
  return checkMultiples(parsedHand.countMap, 3, 2)
}

/**
 * The method checks whether their are two sets of card with
 * the given first and second frequencies respectively
 * @param {Map} countMap A map of card values and their frequencies in the hand
 * @param {*} first the highest frequency
 * @param {*} second the second highest frequency
 */
function checkMultiples (countMap, first, second) {
  const { max, max2 } = getHighestTwo(countMap)
  return (max === first && second === max2)
}

/**
 * This method checks for three cards with the same value in a hand
 * @param {Object} The parsedObject consisting of cards and countMap
 * @returns {Boolean}
 */
function checkTwoPair (parsedHand) {
  return checkMultiples(parsedHand.countMap, 2, 2)
}

/**
 * This metho returns the highest two frequencies in the hand
 * @param {Map} countMap The map of card values and its frequency in the hand
 * @return {Object}
 */
function getHighestTwo (countMap) {
  const values = [...countMap.values()]
  values.sort()
  const max = values.pop()
  const max2 = values.pop()
  return { max, max2 }
}

/**
 * This method checks for a single pair in a hand
 * @param {Object} parsedHand The parsedHandObject
 * @returns {Boolean}
 */
function checkOnePair (parsedHand) {
  const count = Math.max(...parsedHand.countMap.values())
  return count === 2
}

/**
 * This method checks for three cards with the same value in a hand
* @param {Object} parsedHand The parsedHandObject
 * @returns {Boolean}
 */
function threeOfAKind (parsedHand) {
  const count = Math.max(...parsedHand.countMap.values())
  return count === 3
}
fourOfAKind.returnString = constants.FOUR_OF_A_KIND
checkFullHouse.returnString = constants.FULL_HOUSE
checkTwoPair.returnString = constants.TWO_PAIR
threeOfAKind.returnString = constants.THREE_OF_A_KIND
checkOnePair.returnString = constants.ONE_PAIR
module.exports = {
  fourOfAKind,
  checkFullHouse,
  checkTwoPair,
  threeOfAKind,
  checkOnePair
}
