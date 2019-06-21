'use strict'

/**
 * This method creates a map of card values as keys
 *  and their frequency as the value
 * @param {Array} cards Array of Card Objects
 * @returns {Map} map of card values and frequency
 */
function getCountMap (cards) {
  const map = new Map()
  cards.forEach(card => {
    if (!map.has(card.value)) {
      map.set(card.value, 1)
    } else {
      let count = map.get(card.value)
      map.set(card.value, ++count)
    }
  })
  return map
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
  return checkMultiples(countMap, 3, 2)
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
 * @param {Map} countMap The map of card  values and their frequency
 * @returns {Boolean}
 */
function checkTwoPair (countMap) {
  return checkMultiples(countMap, 2, 2)
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
 * @param {Map} countMap The map of card  values and their frequency
 * @returns {Boolean}
 */
function checkOnePair (countMap) {
  const count = Math.max(...countMap.values())
  return count === 2
}

/**
 * This method checks for three cards with the same value in a hand
 * @param {Map} countMap The map of card  values and their frequency
 * @returns {Boolean}
 */
function threeOfAKind (countMap) {
  const count = Math.max(...countMap.values())
  return count === 3
}

module.exports = {
  fourOfAKind,
  checkFullHouse,
  checkTwoPair,
  threeOfAKind,
  getCountMap,
  checkOnePair
}
