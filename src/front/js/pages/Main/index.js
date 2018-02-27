import { connect } from 'react-redux'
import { compose, lifecycle, withProps } from 'recompose'
import Main from './Main'
import { getItems } from './actions'

const mapStateToProps = ({ app: { searchWord }, allItems: { items, filteredItems }, app: { isLogged }}) => ({ items, searchWord, filteredItems, isLogged })

export default compose(
  connect(mapStateToProps, { getItems }),
  lifecycle({
    componentDidMount() {
      const { getItems } = this.props
      
      getItems()
    }
  }),
  withProps(({ items = [], filteredItems = [], searchWord }) => ({
    positions: items.reduce((positions, item) => [...positions, ...item.coordinates], []),
    items: filteredItems.length ? filteredItems : items,
    searchMessage: Boolean(searchWord) && !Boolean(filteredItems.length),
    hightlight: Boolean(searchWord) && Boolean(filteredItems.length)
  }))
)(Main)