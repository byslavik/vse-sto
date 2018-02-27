import { getAllItems } from 'api'

export const getItems = () => dispatch => getAllItems().then(items => dispatch({ type: 'SET_ALL_ITEMS', payload: items }))