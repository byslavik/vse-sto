import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { AdminElements } from 'components/common'
import './style.css'

const StoItem = ({ title, description, _id, isLogged }) => 
<div className="sto-item col-md-3">
  <Link to={`/details/${_id}`}><h3>{ title }</h3></Link>
  <p>{ description }</p>
  <AdminElements isLogged={ isLogged } id={ _id } />
</div>

export default StoItem