import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { AdminElements } from 'components/common'
import { getHighlightedText } from 'helpers'
import './style.css'

const StoItem = ({ title, description, logo, address, _id, hightlight, searchWord, isLogged }) => 
<div className="sto-item col-md-3">
  <Link to={`/details/${_id}`}><h3>{ hightlight ? getHighlightedText(title, searchWord) : title }</h3></Link>
  { logo && <img src={ logo } title={ title } /> }
  <p>{  hightlight ? getHighlightedText(description.substr(0, 300), searchWord) : description.substr(0, 300)  }{ description.substr(0, 300).length < description.length ? '...' : '' }</p>
  <p><b>Адрес</b>: {  address  }</p>
  <AdminElements isLogged={ isLogged } id={ _id } />
</div>

export default StoItem