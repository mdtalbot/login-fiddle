import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/universal/navbar';
import Homepage from './components/homepage';
import SignIn from './components/auth/signin';
import Signup from './components/auth/signup';
import reducers from './reducers';
import reduxThunk from 'redux-thunk'
import { AUTHENTICATED } from './actions'
import requireAuth from './components/HOC/requireAuth'
import noRequireAuth from './components/HOC/noRequireAuth'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const user = localStorage.getItem('user');

if (user) {
  store.dispatch({ type: AUTHENTICATED });
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Homepage} />
        <Route path="/signin" component={noRequireAuth(SignIn)} />
        <Route path='/signup' component={noRequireAuth(SignUp)} />
        <Route path='/signout' component={SignOut} />
        <Route path="/secret" component={requireAuth(SecretPage)} />
      </div>
    </Router>
  </Provider>,
  document.querySelector('#root')
);
