'use strict';

/**
 * Create the services module
 */
angular.module('recipes.services', [])

  .service('RecipesService', require('./service.recipe'));
