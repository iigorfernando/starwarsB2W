import React from 'react'
import {Switch, Route, Redirect } from 'react-router'


import Home from './Home/Home'
import Game from './Game/Game'
import Credits from './Credits/Credits'


export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Game' component={Game} />
        <Route path='/Credits' component={Credits} />
        <Redirect from='*' to='/' />
    </Switch>