import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, history } from './store'

import { App } from 'components';
import { Main, DetailsPage, AddPage, LoginPage, EditPage } from 'pages';

const render = () => {
    ReactDom.render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <App>
              <Route exact path="/" component={ Main } />
              <Route exact path="/details/:id" component={ DetailsPage } />
              <Route exact path="/edit/:id" component={ EditPage } />
              <Route exact path="/add" component={ AddPage } />
              <Route exact path="/admin/login" component={ LoginPage } />
            </App>
          </Switch>
        </Router>
      </Provider>,
      document.getElementById('root')
    )
}

render();
