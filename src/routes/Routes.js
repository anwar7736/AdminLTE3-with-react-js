import React from 'react'
import {Route} from 'react-router-dom'
import {Switch} from 'react-router'
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';
import PageNotFound from '../pages/PageNotFound';

export default function Routes() {
  return (
    <div>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/register" component={RegisterPage}/>
            <Route exact path="/profile" component={ProfilePage}/>

            <Route exact component={PageNotFound}/>

        </Switch>
    </div>
  )
}
