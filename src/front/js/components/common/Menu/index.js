import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Menu = () => 
<Fragment>
  <li className="nav-item active">
    <Link className="btn btn-danger top-menu-item nav-link" to="#">Список СТО</Link>
  </li>
</Fragment>

export default Menu
