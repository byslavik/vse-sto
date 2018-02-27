import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { app } from './app';
import { editorForm } from 'components/StoItemEditorForm/reducer';
import { allItems } from 'pages/Main/reducer';
import { specialItem } from 'pages/DetailsPage/reducer';

export default combineReducers({
  routerReducer,
  editorForm,
  app,
  allItems,
  specialItem
});