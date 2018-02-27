import React, { Fragment } from 'react'
import './styles.css'

const FilterField = ({
  value,
  onChange
}) =>
  <Fragment>
    <input placeholder="Начните вводить текст и список будет отсфильтрован автоматически" className="search-field" value={ value } onChange={ onChange } />
  </Fragment>

export default FilterField
