'use strict';

/**
 * The recipes service
 */
module.exports = function ($http, $log, $q) {
  'ngInject';

  const API_URL = "http://localhost:3000/dishes";

  this.getAll = function () {
    var deferred = $q.defer();

    $http.get(API_URL).then((response) => {
      deferred.resolve(response.data);
    }).catch((error) => {
      deferred.reject(error);
      $log.error(error);
    });

    return deferred.promise;
  };

  this.getById = function (id) {
    var deferred = $q.defer();

    $http.get(API_URL + '/' + id).then((response) => {
      deferred.resolve(response.data);
    }).catch((error) => {
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
    ).then((response) => {
      deferred.resolve(response.data);
    }).catch((error) => {
      deferred.reject(error);
      $log.error(error);
    });

    return deferred.promise;
  };

  this.delete = function (recipe) {
    var deferred = $q.defer();

    $http.delete(API_URL + '/' + recipe.id).then((response) => {
      deferred.resolve(response.data);
    }).catch((error) => {
      deferred.reject(error);
      $log.error(error);
    });

    return deferred.promise;
  };

};