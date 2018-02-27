import React from 'react'
import { Logo, Menu, AdminMenu } from 'components/common'
import './styles.css'

const Header = () => 
  <header className="row header">
    <div className="col col-md-3">
      <Logo/>
    </div>
    <div className="col col-md-9">
      <nav className="navbarnavbar-light bg-faded">
        <div>
          <ul className="navbar-nav mr-auto flex-row justify-content-start">
            <Menu />
            <AdminMenu />
          </ul>
        </div>
      </nav>
    </div>
  </header>

export default Header
