/* eslint-disable indent */

const initialState = { selectedTab: 'cheapest', selectedFilter: 'all', selectedCheckboxes: ['all'] }
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'cheapest':
      return 'cheapest'
    case 'fastest':
      return 'fastest'
    case 'all':
      return 'all'
    case 'zero':
      return 'zero'
    case 'one':
      return 'one'
    case 'two':
      return 'two'
    case 'three':
      return 'three'
    default:
      return state
  }
}
