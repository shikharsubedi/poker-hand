const constants = require('./constants')

/**
 * This method checks if the cards are a sequence and also of the same suite
 * @param {Array} parsedHand the parsed Hand
 * @returns {Boolean}
 */
function straightFlush (parsedHand) {
  return flush(parsedHand) && isSequence(parsedHand.cards)
}

/**
 * checks whether the cards are all of the same suite
 * @param {Array} parsedHand the parsed hand
 * @return {Boolean}}
 */
function flush (parsedHand) {
  const suites = parsedHand.cards.map(card => card.suite)
  const firstSuite = suites[0]
  return suites.every(suite => suite === firstSuite)
}

/**
 * This method checks if the hand has consecutive numbers but different suites
 * @param {Array} parsedHand the parsed hand see parse-hand.js for details
 * @return {Boolean}
 */
function straight (parsedHand) {
  return isSequence(parsedHand.cards)
}

/**
 *@param {Array} the array of values
 *@param {Array} the second array of values
 *@returns {Boolean}
 */
function equalValues (arr1, arr2) {
  return arr1.every((value, index) => value === arr2[index])
}

/**
 * This method checks if the cards in a hand are consecutive
 * @param {Array} values the values in a hand
 * @return {Boolean}
 */
function isConsecutive (values) {
  let firstValue = values.shift()
  return values.every(value => value === ++firstValue)
}

/**
 * checks whether the card values form a poker sequence
 * @param {Array} cards Array of card objects
 * @return {Boolean}}
 */
function isSequence (cards) {
  const biggestSequence = [1, 10, 11, 12, 13]
  let values = cards.map(card => card.value)
  values.sort((a, b) => (a > b) ? 1 : ((a < b) ? -1 : 0))
  return (equalValues(values, biggestSequence) ||
  isConsecutive(values))
}

straight.returnString = constants.STRAIGHT
straightFlush.returnString = constants.STRAIGHT_FLUSH
flush.returnString = constants.FLUSH

module.exports = {
  straightFlush,
  straight,
  flush

}
