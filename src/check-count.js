'use strict'
const constants = require('./constants')

/**
 * checks for four of a kind in the hand
 * @param {Object} parsedHand parsedHand using
 * @returns {Boolean}
 */
function fourOfAKind (parsedHand) {
  return findCount(parsedHand.countMap, 4)
}
/**
 * checks if there is a full house
 * Full house is one where there is  three of a kind
 * and a also a pair in the hand
 * @param {Map} countMap map of values and their frequency
 * @returns {Boolean}
 */
function fullHouse (parsedHand) {
  return checkMultiples(parsedHand.countMap, 3, 2)
}

/**
 * This method checks for three cards with the same value in a hand
* @param {Object} parsedHand The parsedHandObject
 * @returns {Boolean}
 */
function threeOfAKind (parsedHand) {
  return findCount(parsedHand.countMap, 3)
}

/**
 * This method checks for three cards with the same value in a hand
 * @param {Object} parsedHand parsedObject consisting of cards and countMap
 * @returns {Boolean}
 */
function twoPair (parsedHand) {
  return checkMultiples(parsedHand.countMap, 2, 2)
}

/**
 * This method checks for a single pair in a hand
 * @param {Object} parsedHand The parsedHandObject
 * @returns {Boolean}
 */
function onePair (parsedHand) {
  return findCount(parsedHand.countMap, 2)
}

/**
 * The method checks whether their are two sets of card with
 * the given first and second frequencies respectively
 * @param {Map} countMap A map of card values and their frequencies in the hand
 * @param {Number} first the highest frequency
 * @param {Number} second the second highest frequency
 */
function checkMultiples (countMap, first, second) {
  const { max, max2 } = getHighestTwo(countMap)
  return (max === first && second === max2)
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
 * This method checks whether the highest frequency of a card is equal
 * the the max parameter
 * @param {Map} countMap
 * @param {Number} max
 */
function findCount (countMap, max) {
  const count = Math.max(...countMap.values())
  return count === max
}

fourOfAKind.returnString = constants.FOUR_OF_A_KIND
fullHouse.returnString = constants.FULL_HOUSE
twoPair.returnString = constants.TWO_PAIR
threeOfAKind.returnString = constants.THREE_OF_A_KIND
onePair.returnString = constants.ONE_PAIR

module.exports = {
  fourOfAKind,
  fullHouse,
  twoPair,
  threeOfAKind,
  onePair
}
