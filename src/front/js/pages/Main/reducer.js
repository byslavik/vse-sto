const initialState = {
  items: []
}

export const allItems = (state = initialState, { type, payload }) => {
  switch(type) {
    case 'SET_ALL_ITEMS': {
      return {
        items: payload
      }
    }

    default: {
      return state
    }
  }
}