import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from './Home'

import FlexContainer from './FlexContainer';

import OneRow from './OneRow'

const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/s' component={Home}/>
      <Route exact path='/wrap' component={FlexContainer}/>
      <Route exact path='/onerow' component={OneRow}/>
     
    </Switch>
  </BrowserRouter>
)

export default Main
