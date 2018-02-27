import { connect } from 'react-redux'
import { compose, lifecycle, withProps } from 'recompose'
import Main from './Main'
import { getItems } from './actions'

const mapStateToProps = ({ allItems: { items }, app: { isLogged }}) => ({ items, isLogged })

export default compose(
  connect(mapStateToProps, { getItems }),
  lifecycle({
    componentDidMount() {
      const { getItems } = this.props
      
      getItems()
    }
  }),
  withProps(({ items = [] }) => ({
    positions: items.reduce((positions, item) => [...positions, ...item.coordinates], [])
  }))
)(Main)