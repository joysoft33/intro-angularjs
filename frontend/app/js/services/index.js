'use strict';

/**
 * Create the services module
 */
const services = angular.module('recipes.services', []);

services.service('RecipesService', require('./service'));
