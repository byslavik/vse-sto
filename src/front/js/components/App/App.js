import React, { Fragment } from 'react'
import { Header, Footer, Alert } from 'components/common'
import 'bootstrap/dist/css/bootstrap.css'
import 'open-iconic/font/css/open-iconic-bootstrap.css'
import './style.css'

const App = ({ alerts = [] , children }) =>
  <div className="app-wrapper wrapper container-fluid">
    <Header />
    { alerts.map((alert, index) => <Alert key={ index } { ...alert } />) }
    <main>
      { children }
    </main>
    <Footer />
  </div>

export default App