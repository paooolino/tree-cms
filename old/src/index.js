/*
  external imports
 */
 
import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

/*
  internal imports
*/

import reducer from './reducer';
import App from './App';

/*
  setup
*/

const store = createStore(reducer);
const rootElement = document.getElementById('root');

/*
  render
*/

const myApp = new App(store, rootElement);

store.subscribe(() =>
  myApp.render()
)

myApp.render();


