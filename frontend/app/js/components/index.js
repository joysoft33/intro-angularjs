'use strict';

/**
 * Create the components module
 */
angular.module('recipes.components', [])

  .component("recipesList", require('./component.list'))
  .component("recipeShow", require('./component.show'))
  .component("recipeCreate", require('./component.create'));
