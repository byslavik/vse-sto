import { addItem, getItemById, updateItem, getAllItems } from 'api'
import { push } from 'react-router-redux'

export const inputChange = ({ target: { name, value }}) => ({ type: 'EDIT_FORM_CHANGE', payload: { [name]: value }})
export const mapChange = ({ coordinates }) => ({ type: 'EDIT_FORM_CHANGE', payload: { coordinates }})
export const setErrors = fields => ({ type: 'EDIT_FORM_ERROR', payload: fields })
export const checkFields = ({ fields }) =>
  Object
    .keys(fields)
    .filter(item => item != 'coordinates' && item != 'logo' && item != '_id' && item != '__v')
    .reduce((result, current) => ({
      ...result,
      [current]: fields[current].trim() == '' ? true : false
    }), {})

export const saveItem = fields => dispatch =>
  addItem(fields)
    .then(res => dispatch({ type: 'SET_ALERT', payload: { type: res.alertType, message: res.msg } }))
    .then(dispatch({ type: 'CLEAR_FORM_DATA' }))
    .then(() => { getAllItems().then(items => dispatch({ type: 'SET_ALL_ITEMS', payload: items })) }) 
    .then(dispatch(push('/')))

export const updateItemHandler = fields => dispatch =>
  updateItem(fields)
    .then(res => dispatch({ type: 'SET_ALERT', payload: { type: res.alertType, message: res.msg } }))
    .then(() => { getAllItems().then(items => dispatch({ type: 'SET_ALL_ITEMS', payload: items })) })    
    .then(dispatch({ type: 'CLEAR_FORM_DATA' }))
    .then(dispatch(push('/')))


export const getSpecItem = id => dispatch => getItemById(id).then(item => dispatch({ type: 'SET_EDIT_FORM', payload: item }))