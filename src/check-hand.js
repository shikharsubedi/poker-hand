const { parseCards, getCountMap } = require('./parse-cards')
function checkHand (hand) {
  const cards = parseCards(hand)
  const countMap = getCountMap(cards)

  if (checkStraightFlush(cards)) {
    return 'straight flush'
  } else if (fourOfAKind(countMap)) {
    return 'four of a kind'
  } else if (checkFullHouse(countMap)) {
    return 'full house'
  } else if (checkFlush(cards)) {
    return 'flush'
  } else if (checkStraight(cards)) {
    return 'straight'
  } else if (threeOfAKind(countMap)) {
    return 'three of a kind'
  } else if (checkTwoPair(countMap)) {
    return 'two pair'
  } else if (checkOnePair(cards)) {
    return 'one pair'
  } else {
    return 'high card'
  }
}
/**
 * checks for four of a kind in the hand
 * @param {Map} countMap map of card values and their frequency in the hand
 * @returns boolean
 */
function fourOfAKind (countMap) {
  const count = Math.max(...countMap.values())
  return count === 4
}
/**
 * checks if there is a full house
 * @param {Map} countMap map of values and their frequency
 */
function checkFullHouse (countMap) {
  return false
}

function checkFlush (cards) {
  return false
}
function checkStraight (cards) {
  return false
}
function checkTwoPair (cards) {
  return false
}

function threeOfAKind (countMap) {
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
  if (JSON.stringify(biggestSequence) === JSON.stringify(values)) {
    return true
  }
  let prev = values.shift()
  return values.reduce((soFar, current) => {
    return (soFar && (current === (++prev)))
  }, true)
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

module.exports.checkHand = checkHand
