'use strict'
/**
 * Parses the hand into array of card objects
 * @param {Array} hand
 * @returns {Array}
 */
function parseCards (hand) {
  return hand.map(getCardObject)
}
function getCardObject (cardString) {
  const suites = { 'C': 'C', 'H': 'H', 'D': 'D', 'S': 'S' }
  const [value, suite] = cardString.split('-')
  return {
    value: Number(value),
    suite: suites[suite]
  }
}

module.exports = {
  parseCards
}
