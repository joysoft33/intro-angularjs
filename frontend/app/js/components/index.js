'use strict';

/**
 * Create the components module
 */
const components = angular.module('recipes.components', []);

components.component("recipeList", require('./component.list'));
components.component("recipeShow", require('./component.show'));
components.component("recipeCreate", require('./component.create'));
