import { loginHandler, registerHandler } from 'api'
import { push } from 'react-router-redux'
import { setCookie } from 'helpers'

export const loginToTheApp = ({ username, password }) => dispatch => loginHandler(username, password)
  .then(({ success, token }) => {
    if(success) {
      setCookie('authorization', token, 1)
      dispatch({ type: 'SET_ALERT', payload: { type: 'success', message: 'Вы успешно вошли в систему' } })      
      dispatch({ type: 'LOGIN_USER' })      
      dispatch(push('/'))      
    } else {
      dispatch({ type: 'SET_ALERT', payload: { type: 'danger', message: 'Ошибка при логине' } })
    } 

  })
  // .catch(dispatch({ type: 'SET_ALERT', payload: { type: 'danger', message: 'Ошибка при логине' } }))

export const registerToTheApp = ({ username, password }) => dispatch => registerHandler(username, password)
  .then(res => {
    console.log(res)
  })
  .catch()

  

export const inputChange = ({ target: { name, value }}) => ({ type: 'LOGIN_FORM_CHANGE', payload: { [name]: value }})
