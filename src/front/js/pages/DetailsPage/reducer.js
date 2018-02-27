const initialState = {
  item: {}
}

export const specialItem = (state = initialState, { type, payload }) => {
  switch(type) {
    case 'SET_SPEC_ITEM': {
      return {
        item: payload
      }
    }

    default: {
      return state
    }
  }
}