import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter , Route,Switch} from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';
import Posts from './components/post_index';
import PostShow from './components/post_show';
import PostNew from './components/post_new';




const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

//Switch inside switch most detailed route first
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
    <Switch>
    	<Route path='/new' component={PostNew} />
      <Route path='/post/:id' component={PostShow} />
    	<Route path="/" component={Posts} />
    </Switch>
    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#app'));