import { compose, withProps, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { inputChange, mapChange, checkFields, setErrors, saveItem, getSpecItem, updateItemHandler } from './actions'
import StoItemEditorForm from './StoItemEditorForm'

const mapStateToProps = ({ editorForm: { fields, errors }, app: { isLogged } }) => ({ fields, errors, isLogged })

export default compose(
  connect(mapStateToProps, { inputChange, mapChange, setErrors, saveItem, getSpecItem, updateItemHandler }),
  lifecycle({
    componentDidMount() {
      const { getSpecItem, prefill, match: { params: { id } = {} } = {}  } = this.props

      if(prefill) {
        getSpecItem(id)
      }
    }
  }),
  withProps(({
    inputChange,
    mapChange,
    setErrors,
    errors,
    saveItem,
    updateItemHandler,
    editMode,
    fields
  }) => ({
    onInputChange: inputChange,
    onMapChange: mapChange,
    onSubmit: () => {
      const validate = checkFields({ fields })

      if(Object.values(validate).some(item => item === true)) {
        setErrors({ ...validate })
      } else {
        editMode ?
          updateItemHandler(fields) :
          saveItem(fields)
      }
    }
  }))
)(StoItemEditorForm)