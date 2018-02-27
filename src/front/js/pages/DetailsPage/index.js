import { connect } from 'react-redux'
import { compose, lifecycle, withProps } from 'recompose'
import Details from './Details'
import { getSpecItem } from './actions'

const mapStateToProps = ({ specialItem: { item }, app: { isLogged }}) => ({ item, isLogged })

export default compose(
  connect(mapStateToProps, { getSpecItem }),
  lifecycle({
    componentDidMount() {
      const { getSpecItem, match: { params: { id } } } = this.props

      getSpecItem(id)
    }
  })
)(Details)