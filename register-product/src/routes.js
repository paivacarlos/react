/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './views/home'
import ProductRegister from './views/products/register'
import ProductSearch from './app/search'

export default () => {
  return(
    <Switch>
        <Route exact path="/products-register/:sku?" component={ProductRegister} />
        <Route exact path="/products-search" component={ProductSearch} />
        <Route exact path="/" component={Home} />
    </Switch>  
  )  
}