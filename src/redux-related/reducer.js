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
  tickets: [],
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'cheapest':
      return 'cheapest'
    case 'fastest':
      return 'fastest'
    case 'all':
      if (
        (!state.allSelected && !state.zeroSelected) ||
        !state.oneSelected ||
        !state.twoSelected ||
        !state.threeSelected
      ) {
        return {
          ...state,
          allSelected: true,
          zeroSelected: true,
          oneSelected: true,
          twoSelected: true,
          threeSelected: true,
        }
      } else if (!state.allSelected) {
        return {
          ...state,
          allSelected: true,
          zeroSelected: true,
          oneSelected: true,
          twoSelected: true,
          threeSelected: true,
        }
      } else if (state.allSelected) {
        return {
          ...state,
          allSelected: false,
          zeroSelected: false,
          oneSelected: false,
          twoSelected: false,
          threeSelected: false,
        }
      }

      return { ...state, allSelected: !state.allSelected }
    case 'everything checked':
      return {
        ...state,
        allSelected: true,
        zeroSelected: true,
        oneSelected: true,
        twoSelected: true,
        threeSelected: true,
      }

    case 'zero':
      return { ...state, zeroSelected: !state.zeroSelected }
    case 'one':
      return { ...state, oneSelected: !state.oneSelected }
    case 'two':
      return { ...state, twoSelected: !state.twoSelected }
    case 'three':
      return { ...state, threeSelected: !state.threeSelected }
    case 'ticket':
      return { ...state, tickets: action.payload }
    default:
      return state
  }
}
