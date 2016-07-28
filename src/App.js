/*
  external imports
*/

import $ from 'jquery';
import jstree from 'jstree';

/*
  internal imports
*/

import * as creators from './actionCreators';
import Tree from './Tree';
import appTemplate from './templates/appTemplate.html';

/*
  class definition
*/

export default class App {
  
  constructor(store, rootElement) {
    this.store = store;
    this.rootElement = rootElement;
  };
  
  render() {
    const html = appTemplate(this.store.getState());
    $(this.rootElement).html(html);
    $('#counterAddButton').on('click', () => { 
      this.store.dispatch(creators.counterAdd());
    });
  };
  
}