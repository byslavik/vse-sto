import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware, push } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import reducer from './reducers';

export const history = createHistory();
const middleware = routerMiddleware(history);

history.listen(() => {
  window.scrollTo(0, 0);
})


export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk), applyMiddleware(middleware)));