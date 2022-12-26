/* eslint-disable indent */

const initialState = { selectedTab: 'cheapest', selectedFilter: 'all', selectedCheckboxes: ['all'] }
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'cheapest':
      return 'cheapest'
    case 'fastest':
      return 'fastest'
    case 'all':
      console.log('all selected')
      return 'all'
    case 'zero':
      console.log('zero')
      return 'zero'
    case 'one':
      console.log('wone')
      return 'one'
    case 'two':
      console.log('ttwo')
      return 'two'
    case 'three':
      console.log('trois')
      return 'three'
    default:
      return state
  }
}
