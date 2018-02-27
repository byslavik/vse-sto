import { getCook, getToken } from 'helpers'

const auth = getCook('authorization')

const initialState = {
  alerts: [],
  isLogged: getToken(auth),
  loginForm: {
    username: '',
    password: ''
  }
}

export const app = (state = initialState, { type, payload }) => {
 switch (type) {
    case 'SET_ALERT': {
      return {
        ...state,
        alerts: [
          ...state.alerts,
          payload
        ]
      }
    }

    case 'CLEAR_ALERT': {
      return {
        ...state,
        alerts: []
      }
    }

    case 'LOGIN_USER': {
      return {
        ...state,
        isLogged: true
      }
    }

    case 'LOGIN_FORM_CHANGE': {
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          ...payload
        }
      }
    }

    default: {   
      return state;
    }
  }
}