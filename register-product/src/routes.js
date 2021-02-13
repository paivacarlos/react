import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from './views/home'
import ProductRegister from './views/products/register'

export default () => {
  return(
    <HashRouter>
      <Switch>
        <Route exact path="/products-register" component={ProductRegister} />
        <Route exact path="/" component={Home} />
      </Switch>    
    </HashRouter>
  )  
}