import { connect } from 'react-redux'
import App from './App'

const mapStateToProps = ({ app: { alerts }}) => ({ alerts })

export default connect(mapStateToProps)(App)