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
  const { max, second } = getHighestTwo(countMap)
  return (max === 3 && second === 2)
}

/**
 * This method checks for three cards with the same value in a hand
 * @param {Map} countMap The map of card  values and their frequency
 * @returns {Boolean}
 */
function checkTwoPair (countMap) {
  const { max, second } = getHighestTwo(countMap)
  return (max === 2) && (second === 2)
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
  const second = values.pop()
  return { max, second }
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
