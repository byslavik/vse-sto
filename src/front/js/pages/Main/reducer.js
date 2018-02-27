const initialState = {
  items: [],
  filteredItems: []
}

export const allItems = (state = initialState, { type, payload }) => {
  switch(type) {
    case 'SET_ALL_ITEMS': {
      return {
        items: payload
      }
    }

    case 'FILTER_RESULTS': {
      return {
        ...state,
        filteredItems: state.items.filter(item => item.title.toLowerCase().indexOf(payload.toLowerCase()) !== -1 || item.description.toLowerCase().indexOf(payload.toLowerCase()) !== -1 )
      }
    }

    default: {
      return state
    }
  }
}