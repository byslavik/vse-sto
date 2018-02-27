import React, { Fragment } from 'react'
import { Alert } from 'components/common'
import './style.css'

const Login = ({ onSubmit, onChange, isLogged, values: { username, password } = {} }) =>
<Fragment>
  {
    !isLogged ?
      <div className="container">
        <div className="form-signin">
          <h2 className="form-signin-heading">Пожалуйста, введите логин и пароль</h2>
          <label htmlFor="inputLogin" className="sr-only">Логин</label>
          <input type="text" value={ username } id="inputLogin" name="username" className="form-control" placeholder="Логин" onChange={ onChange }/>
          <label htmlFor="inputPassword" className="sr-only">Пароль</label>
          <input type="password" value={ password } id="inputPassword" name="password" className="form-control" placeholder="Пароль"  onChange={ onChange } />
          <button onClick={ onSubmit } className="btn btn-lg btn-primary btn-block" type="button">Вход</button>
        </div>
      </div> : 
      <Alert type="danger" message="Вы уже в системе" />
  }
</Fragment>

export default Login