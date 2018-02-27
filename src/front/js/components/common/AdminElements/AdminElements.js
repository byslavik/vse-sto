import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const AdminElements = ({ isLogged, id, removeHandler }) =>
  <div>
    {
      isLogged &&
        <ul>
          <li><Link to={`/edit/${id}`}>Редактировать</Link> </li>
          <li><a href="#" onClick={ removeHandler }>Удалить</a></li>
        </ul>
    }
  </div>

export default AdminElements