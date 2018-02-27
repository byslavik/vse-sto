import { compose, withProps } from 'recompose'
import { connect } from 'react-redux'
import { setCookie } from 'helpers'
import AdminMenu from './AdminMenu'

export default compose(
  connect(({ app: {isLogged}}) => ({ isLogged })),
  withProps(() => ({
    logOut: e => {
      e.preventDefault()

      setCookie('authorization', '', {
        expires: -1
      })
      document.location.reload(true)
    }
  }))
)(AdminMenu)