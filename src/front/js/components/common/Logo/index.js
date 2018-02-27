import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import logo from './assets/logo.png'

const Logo = () => 
<Link className="logo" to="/">
  <img src={ `/${logo}` } alt="Все СТО" width="150"/>
</Link>

export default Logo