import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
//import { NotFound } from './components/Menubar/menubar.js'
import { App } from "./components/App";
import { NotFoundException } from "./components/Errors/404";

const MOUNT_NODE = document.getElementById('root')


const Home = () => <h1>Hello from Home!</h1>
const Address = () => <h1>We are located at 555 Jackson St.</h1>
// const NotFound = () => <h1>Not Found</h1>

const Main = () => (
    <Router history={hashHistory}>
        <Route path='/'>
            <IndexRoute app="Index" component={App} />
            <Route path='address' component={Address} />
            <Route path='*' component={NotFoundException} />
        </Route>
    </Router>
)


render(<Main />, MOUNT_NODE)
