/* global shoppingList, store, api */
'use strict';

import $ from 'jquery';
import api from '../src/api';
import shoppingList from '../src/shopping-list';
import './index.css';

$(document).ready(function() {
  shoppingList.bindEventListeners();

  // On initial load, fetch Shopping Items and render
  api.getItems()
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    })
    .catch(err => console.log(err.message))
});

