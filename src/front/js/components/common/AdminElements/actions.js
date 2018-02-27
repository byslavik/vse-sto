import { delItem, getAllItems } from 'api'
import { push } from 'react-router-redux'

export const deleteItem = id => dispatch => delItem(id)
  .then(res => dispatch({ type: 'SET_ALERT', payload: { type: res.alertType, message: res.msg } }))
  .then(() => { getAllItems().then(items => dispatch({ type: 'SET_ALL_ITEMS', payload: items })) })
  .then(dispatch(push('/')))
