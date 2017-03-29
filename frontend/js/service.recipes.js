'use strict';

/**
 * The recipes service
 */
angular.module('recipes.services')

  .service('RecipesService', ['$http', '$log', '$q',

    function ($http, $log, $q) {

      const API_URL = "http://localhost:3000/dishes";

      this.get = function () {
        var deferred = $q.defer();
        $http.get(API_URL).then(function (response) {
          deferred.resolve(response.data);
        }, function (error) {
          deferred.reject(error);
          $log.error(error);
        });
        return deferred.promise;
      };

      this.getById = function (id) {
        var deferred = $q.defer();
        $http.get(API_URL + '/' + id).then(function (response) {
          deferred.resolve(response.data);
        }, function (error) {
          deferred.reject(error);
          $log.error(error);
        });
        return deferred.promise;
      };

      this.save = function (recipe) {
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
      };

      this.delete = function (recipe) {
        var deferred = $q.defer();
        $http.delete(API_URL + '/' + recipe.id).then(function (response) {
          deferred.resolve(response.data);
        }, function (error) {
          deferred.reject(error);
          $log.error(error);
        });
        return deferred.promise;
      };

    }

  ]);