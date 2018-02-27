import React from 'react'
import './style.css'

const Input = ({
  name,
  title,
  placeholder,
  description,
  type,
  value,
  error,
  onChange
}) => 
<div className={`form-group ${ error ? 'has-error':'' }`}>
  <label htmlFor={ name }>{ title }</label>
  { type === 'textarea' ?
      <textarea className="form-control" id={ name } name={ name } rows="3" aria-describedby={ `${name}Help` } onChange={ onChange } value={ value }></textarea> :
      <input type={ type } className="form-control" id={ name } name={ name } aria-describedby={ `${name}Help` } value={ value } placeholder={ placeholder } onChange={ onChange }/>
  }
  { description && <small id={ `${name}Help` } className="form-text text-muted">{ description }</small> }
</div>

export default Input