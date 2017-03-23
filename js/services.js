'use strict';

const services = angular.module('recipes.services', []);

const API_URL = "http://localhost:3000/dishes";

/**
 * The recipes service
 */
services.service('RecipesService', function ($http) {
  return {
    get() {
      // HTTP Request method GET to our express API
      return $http.get(API_URL)
    },
    getById(id) {
      // HTTP Request method GET with param (post id) to our express API
      return $http.get(API_URL + '/' + id)
    },
    save(post) {
      if (post._id) {
        // HTTP Request method PUT (update) with param and data (post) to our express API
        return $http.put(API_URL + '/' + post._id, post)
      } else {
        // HTTP Request method POST (create) with data (post) to our express API
        return $http.post(API_URL, post)
      }
    },
    delete(post) {
      // HTTP Request method DELETE (delete) with param (post id) to our express API
      return $http.delete(API_URL + '/' + post._id)
    }
  }
});