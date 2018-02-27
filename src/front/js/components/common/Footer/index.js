import React from 'react'
import { Logo } from 'components/common'
import './styles.css'

export const Footer = () => 
  <footer className="row footer">
    <div className="col col-sm-6">
      Все права защищены &copy; 2018
    </div>
    <div className="col col-sm-6 text-right">
      <Logo />
    </div>
  </footer>

export default Footer