/*
  external imports
*/

import $ from 'jquery';
import jstree from 'jstree';

/*
  internal imports
*/

import * as creators from './actionCreators';
import Header from './Header';
import Tree from './Tree';
import Footer from './Footer';

/*
  class definition
*/

export default class App {
  
  constructor(store, rootElement) {
    this.store = store;
    this.rootElement = rootElement;
  };
  
  render() {
    
    $(this.rootElement).html('<div id="App"></div>');
    
    const header = new Header();
    header.render();
    
    const Tree = new Tree();
    tree.render();
    
    const Footer = new Footer();
    footer.render();

  }
    
    /*
    $('#treeContainer').jstree({
      'core': {
        'data': {
          'text': 'Root node',
          'children': [
            { 'text': 'Child node 1' },
            { 'text': 'Child node 2' }
          ]
        }
      }
    });
    */
    
  };
  
}