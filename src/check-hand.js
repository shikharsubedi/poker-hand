
function checkHand (hand) {
  const cards = getCards(hand)
  if (checkStraightFlush(cards)) {
    return 'straight flush'
  } else if (checkFullHouse(cards)) {
    return 'full house'
  } else if (checkFlush(cards)) {
    return 'flush'
  } else if (checkStraight(cards)) {
    return 'straight'
  } else if (checkTwoPair(cards)) {
    return 'two pair'
  } else {
    return 'high card'
  }
}

function checkFullHouse (cards) {
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

function checkStraightFlush (cards) {
  return isFlush(cards) && isSequence(cards)
}

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
function isFlush (cards) {
  const suites = cards.map(card => card.suite)
  const suite = suites[0]
  let result = suites.reduce((soFar, current) => {
    return soFar && (current === suite)
  }, true)
  return result
}

function getCount (cards) {
  const map = new Map()
  cards.forEach(card => {
    if (!map.has(card.value)) {
      map.set(card.value, 1)
    } else {
      let count = map.get(card.value)
      map.set(++count)
    }
  })
  const count = Math.max(...map.values())
  return count
}

function getCards (hand) {
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

module.exports.checkHand = checkHand
