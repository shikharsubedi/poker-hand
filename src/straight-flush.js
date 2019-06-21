
/**
 * This method checks if the hand has consecutive numbers but different suites
 * @param {Array} cards array of card objects
 * @return {Boolean}
 */
function checkStraight (cards) {
  return isSequence(cards)
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
    return (a > b) ? 1 : ((a < b) ? -1 : 0)
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
  }
  return true
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

module.exports = {
  checkStraightFlush,
  checkStraight,
  isFlush

}
