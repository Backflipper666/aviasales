export const selectAll = () => {
  return { type: 'all' }
}

export const selectZero = () => {
  return { type: 'zero' }
}

export const selectOne = () => {
  return { type: 'one' }
}

export const selectTwo = () => {
  return { type: 'two' }
}

export const selectThree = () => {
  return { type: 'three' }
}

export const selectCheapest = () => {
  return { type: 'cheapest' }
}

export const selectFastest = () => {
  return { type: 'fastest' }
}

export const checkEverything = () => {
  return { type: 'everything checked' }
}

export const getTickets = () => {
  return {
    type: 'ticket',
  }
}

export const addManyCustomersAction = (payload) => {
  return {
    type: 'ticket',
    payload,
  }
}
