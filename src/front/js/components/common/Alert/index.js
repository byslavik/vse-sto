import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import Alert from './Alert'

const clearAlerts = () => ({ type: 'CLEAR_ALERT' })

export default compose(
  connect(null, { clearAlerts } ),
  lifecycle({
    componentDidMount(){
      const { clearAlerts } = this.props

      setTimeout(() => clearAlerts(), 3000)
    }
  })
)(Alert)