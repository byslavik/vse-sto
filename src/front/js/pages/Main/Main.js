import React, { Fragment } from 'react'
import { FilterField} from 'components'
import { GMap, StoItemList, Alert } from 'components/common'

const Main = ({ items = [], positions = [], isLogged, hightlight, searchMessage, searchWord }) =>
<Fragment>
  <GMap positions={ positions } />
  <p>
    <FilterField />
  </p>
  { searchMessage && <Alert type="warning" message="Не найдены СТО, в соответсвии вашему запросу" /> }
  <StoItemList searchWord={ searchWord } hightlight={ hightlight } items={items} isLogged={ isLogged } />
</Fragment>


export default Main