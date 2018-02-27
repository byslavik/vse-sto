import React from 'react'
import { GMap, AdminElements } from 'components/common'
import './styles.css'

const Details = ({
  item: {
    coordinates,
    title,
    description,
    address,
    contacts,
    _id
  },
  isLogged
}) =>
  <div>
    <h1>{ title }</h1>
    <AdminElements isLogged={ isLogged } id={ _id } />
    <div className="row details-map-wrapper">
      <div className="col-md-12">
        <GMap positions={ coordinates } />
      </div>
    </div>
    <div className="row details-info ">
      <div className="col-md-3">
        <p>
          <b>Описание</b>
        </p>
      </div>
      <div className="col-md-9">
        <p>{ description }</p>
      </div>
    </div>

    <div className="row details-info ">
      <div className="col-md-3">
        <p>
          <b>Адрес</b>
        </p>
      </div>
      <div className="col-md-9">
        <p>{ address }</p>
      </div>
    </div>

    <div className="row details-info ">
      <div className="col-md-3">
        <p>
          <b>Контакты</b>
        </p>
      </div>
      <div className="col-md-9">
        <p>{ contacts }</p>
      </div>
    </div>


  </div>

export default Details