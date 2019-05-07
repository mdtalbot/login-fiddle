import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/universal/navbar';
import Homepage from './components/homepage';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import reducers from './reducers';
import reduxThunk from 'redux-thunk'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Homepage} />
        <Route path="/signin" component={Signin} />
        <Route path="/secret" component={SecretPage} />
      </div>
    </Router>
  </Provider>,
  document.querySelector('#root')
);
