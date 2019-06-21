'use strict'
/**
 * Parses the hand into an object with array of card objects and a count map
 * @param {Array} hand the array of cardString representing a hand
 * @returns {Object}
 */
function parseHand (hand) {
  const result = {}
  result.cards = hand.map(getCardObject)
  result.countMap = getCountMap(result.cards)
  return result
}
/**
 * Method to parse a single card string into an object literal
 * @param {String} cardString string representing a card e.g '2-S'
 * @returns {Object} the object literal with the suite and value
 */
function getCardObject (cardString) {
  const suites = { 'C': 'C', 'H': 'H', 'D': 'D', 'S': 'S' }
  const [value, suite] = cardString.split('-')
  return {
    value: Number(value),
    suite: suites[suite]
  }
}

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

module.exports = {
  parseHand
}
