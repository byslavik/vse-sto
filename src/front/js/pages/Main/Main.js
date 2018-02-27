import React, { Fragment } from 'react'
import { GMap, StoItemList } from 'components/common'

const Main = ({ items = [], positions = [], isLogged }) =>
<Fragment>
  <GMap positions={ positions } />
  <StoItemList items={items} isLogged={ isLogged } />
</Fragment>


export default Main