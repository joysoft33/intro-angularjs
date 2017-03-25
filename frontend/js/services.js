'use strict';

const services = angular.module('recipes.services', []);

/**
 * The recipes service
 */
services.service('RecipesService', function ($http, $log, $q) {

  const API_URL = "http://localhost:3000/dishes";

  return {

    get() {
      var deferred = $q.defer();
      $http.get(API_URL).then(function (response) {
        deferred.resolve(response.data);
      }, function (error) {
        deferred.reject(error);
        $log.error(error);
      });
      return deferred.promise;
    },
    
    getById(id) {
      var deferred = $q.defer();
      $http.get(API_URL + '/' + id).then(function (response) {
        deferred.resolve(response.data);
      }, function (error) {
        deferred.reject(error);
        $log.error(error);
      });
      return deferred.promise;
    },
    
    save(recipe) {
      var deferred = $q.defer();
      (recipe.id ? 
        $http.put(API_URL + '/' + recipe.id, recipe) : 
        $http.post(API_URL, recipe)
      ).then(function (response) {
        deferred.resolve(response.data);
      }, function (error) {
        deferred.reject(error);
        $log.error(error);
      });
      return deferred.promise;
    },
    
    delete(recipe) {
      var deferred = $q.defer();
      $http.delete(API_URL + '/' + recipe.id).then(function (response) {
        deferred.resolve(response.data);
      }, function (error) {
        deferred.reject(error);
        $log.error(error);
      });
      return deferred.promise;
    }
  }
});