import React from 'react'
import { Route} from 'react-router'
import App from '../container/App';
import RegisterPage from '../components/registerPage';

export default (
  <Route path='/' component={App}>
    <Route exact path='/' component={RegisterPage} />
    <Route path='register' component={RegisterPage} />
  </Route>
)
