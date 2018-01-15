import React, { Fragment } from 'react'
import { Header, Footer } from 'components/common'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

const App = ({ children }) =>
  <div className="app-wrapper wrapper">
    <Header />
    <main>
      { children }
    </main>
    <Footer />
  </div>

export default App