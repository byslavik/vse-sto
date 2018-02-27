import React, { Fragment } from 'react'
import { Input, Button, GMap, Alert } from 'components/common'
import './style.css'

const StoItemEditorForm = ({
  isLogged,
  fields: {
    title,
    description,
    contacts,
    address,
    coordinates
  } = {},
  errors: {
    title: err_title,
    description: err_description,
    contacts: err_contacts,
    address: err_address
  } = {},
  onInputChange,
  onMapChange,
  onSubmit
}) =>
<Fragment>
  {
    isLogged ?
      <div className="item-editor">
        <Input error={ err_title } value={ title } type="text" onChange={ onInputChange } name="title" title="Название" placeholder="Рога и Копыта" description="Введите название Станции Технического Обслуживания" />
        <Input error={ err_description } value={ description } type="textarea" onChange={ onInputChange } name="description" title="Описание" description="Опишите виды работ, производимые в данном СТО" />
        <Input error={ err_contacts } value={ contacts } type="textarea" onChange={ onInputChange } name="contacts" title="Контактная информация" description="Опишите как связаться со специалистами СТО" />
        <Input error={ err_address } value={ address } type="text" onChange={ onInputChange } name="address" title="Адрес" placeholder="Адрес" description="По какому адресу расположено СТО" />
        <div className="form-group">
          <GMap positions={ coordinates } allowDelete allowAdd onChange={ onMapChange } />
        </div>
        <Button type="button" onClick={ onSubmit }>Сохранить</Button>
      </div> :
      <Alert type="danger" message="Вы должны войти в систему, чтобы иметь доступ к этой форме." />
  }
</Fragment>

export default StoItemEditorForm