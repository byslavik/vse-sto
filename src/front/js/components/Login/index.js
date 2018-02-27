import { connect } from 'react-redux'
import { compose, withProps } from 'recompose'
import { loginToTheApp, registerToTheApp, inputChange } from './actions'
import Login from './Login'

const mapStateToProps = ({ app: { loginForm, isLogged }}) => ({ values: loginForm, isLogged })

export default compose(
  connect(mapStateToProps, { loginToTheApp, registerToTheApp, inputChange }),
  withProps(({
    loginToTheApp,
    registerToTheApp,
    inputChange,
    values: {
      username,
      password
    }
  }) => ({
    onChange: inputChange,
    onSubmit: () => loginToTheApp({ username, password })
  }))
)(Login)