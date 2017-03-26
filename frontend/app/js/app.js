'use strict';

import angular from 'angular';
import 'angular-ui-router';

import './services';
import './components';

/**
 * The AngularJS recipes app
 */
const app = angular.module('recipesApp', [
  'ui.router',
  'recipes.components',
  'recipes.services'
]);

app.config(require('./routes'));
