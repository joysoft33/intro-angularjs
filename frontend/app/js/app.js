'use strict';

require('./services');
require('./components');

/**
 * The AngularJS recipes app
 */
const app = angular.module('recipesApp', [
  'ui.router',
  'recipes.components',
  'recipes.services'
]);

app.config(require('./routes'));
