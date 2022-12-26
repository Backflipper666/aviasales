/* eslint-disable indent */

const initialState = {
  selectedTab: 'cheapest',
  selectedFilter: 'all',
  selectedCheckboxes: ['all'],
  allSelected: true,
  zeroSelected: true,
  oneSelected: true,
  twoSelected: true,
  threeSelected: true,
}
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'cheapest':
      return 'cheapest'
    case 'fastest':
      return 'fastest'
    case 'all':
      return { ...state, allSelected: !state.allSelected }
    case 'zero':
      return { ...state, zeroSelected: !state.zeroSelected }
    case 'one':
      return { ...state, oneSelected: !state.oneSelected }
    case 'two':
      return { ...state, twoSelected: !state.twoSelected }
    case 'three':
      return { ...state, threeSelected: !state.threeSelected }
    default:
      return state
  }
}
