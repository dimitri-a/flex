import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from './Home'

import FlexContainer from './FlexContainer';

const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/wrap' component={FlexContainer}/>
     
    </Switch>
  </BrowserRouter>
)

export default Main
