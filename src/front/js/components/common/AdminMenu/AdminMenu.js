import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const AdminElements = ({ isLogged, logOut }) =>
  <Fragment>
    {
      isLogged &&
        <Fragment>
          <li className="nav-item">
            <Link to={`/add`} className="btn btn-danger top-menu-item nav-link">Добавить СТО</Link>
          </li>
          <li className="nav-item">
            <a href="#" className="btn btn-dark top-menu-item nav-link" onClick={ logOut }>Выйти</a>
          </li>
        </Fragment>
    }
  </Fragment>

export default AdminElements