'use strict';

const services = angular.module('recipes.services', []);

/**
 * The recipes service
 */
services.service('RecipesService', function ($http) {

  const API_URL = "http://localhost:3000/dishes";

  return {
    get() {
      return $http.get(API_URL)
    },
    getById(id) {
      return $http.get(API_URL + '/' + id)
    },
    save(recipe) {
      if (recipe.id) {
        return $http.put(API_URL + '/' + recipe.id, recipe)
      } else {
        return $http.post(API_URL, recipe)
      }
    },
    delete(recipe) {
      return $http.delete(API_URL + '/' + recipe.id)
    }
  }
});