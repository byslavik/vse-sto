import { withProps, compose } from 'recompose'
import { connect } from 'react-redux'
import { deleteItem } from './actions'
import AdminElements from './AdminElements'


export default compose(
  connect(null, { deleteItem }),
  withProps(({
    id,
    deleteItem
  }) => ({
    removeHandler: e => {
      e.preventDefault()

      deleteItem(id)
    }
  }))
)(AdminElements)