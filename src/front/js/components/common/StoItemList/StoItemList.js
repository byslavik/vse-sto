import React, { Fragment } from 'react'
import { StoItem } from 'components/common'
import './style.css'

const StoItemList = ({ isLogged, items = [] }) => 
  <div className="sto-item-list row">
    {
      items.length ?
        items.map( (item, key) => <StoItem key={ key } isLogged={ isLogged } {...item} />) :
        <h3>В базе не найдено ни одного СТО</h3>
    }
  </div>

export default StoItemList