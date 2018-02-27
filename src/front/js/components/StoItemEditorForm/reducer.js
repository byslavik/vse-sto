const initialState = {
  fields: {
    title: '',
    logo: '',
    coordinates: [],
    address: '',
    description: '',
    contacts: ''
  },
  errors: {}
}

export const editorForm = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'EDIT_FORM_CHANGE': {
      return {
        ...state,
        fields: {
          ...state.fields,
          ...payload
        }
      }
    }

    case 'SET_EDIT_FORM': {
      return {
        ...state,
        fields: {
          ...payload
        }
      }
    }

    case 'EDIT_FORM_ERROR': {
      return {
        ...state,
        errors: payload
      }
    }

    case 'CLEAR_FORM_ERROR': {
      return {
        ...state,
        errors: {}
      }
    }

    case 'CLEAR_FORM_DATA': {
      return {
        ...initialState
      }
    }
    default: {
      return state
    }
  }
}