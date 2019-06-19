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
  parseCards,
  getCountMap
}
