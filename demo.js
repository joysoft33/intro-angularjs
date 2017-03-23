'use strict';

/**
 * The AngularJS shopping list app
 */
const shoppingListApp = angular.module('shoppingApp', [
  'shoppingList'
]);

/**
 * The shoppingList module
 */
const shoppingList = angular.module('shoppingList', []);

/**
 * The sohppingList controller
 */
shoppingList.controller('shoppingCtrl', ['$scope', function ($scope) {

  // Initialize our model
  $scope.model = {
    list: [],
    newItem: '',
    allChecked: false
  };

  // Add a new item
  $scope.addItem = function () {
    var newItem = $scope.model.newItem.trim();
    if (newItem.length) {
      // Add new item to the items list
      $scope.model.list.push({
        title: newItem,
        completed: false
      });
      // Stay ready for new item input
      $scope.model.newItem = '';
    }
  };

  // Remove an existing item
  $scope.removeItem = function (item) {
    $scope.model.list.splice($scope.model.list.indexOf(item), 1);
  };

  // Toggle items completion flag
  $scope.markAll = function (completed) {
    $scope.model.list.forEach(function (item) {
      item.completed = !completed;
    });
    $scope.model.allChecked = !completed;
  };

  // Remove all checked items
  $scope.clearCompletedItems = function () {
    $scope.model.list = $scope.model.list.filter(function (item) {
      return !item.completed;
    });
  };
}]);