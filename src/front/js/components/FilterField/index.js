import FilterField from './FilterField'
import { connect } from 'react-redux'
import { compose, withProps } from 'recompose'
import { filterResults } from './actions'

const mapStateToProps = ({ app: { searchWord } }) => ({ searchWord })

export default compose(
  connect(mapStateToProps, { filterResults }),
  withProps(({
    searchWord: value,
    filterResults
  }) => ({
    value,
    onChange: e => filterResults(e.target.value)
  }))
)(FilterField)