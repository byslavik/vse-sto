import { getItemById } from 'api'

export const getSpecItem = id => dispatch => getItemById(id).then(item => dispatch({ type: 'SET_SPEC_ITEM', payload: item }))