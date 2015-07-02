'use strict';

/**
 * @ngdoc function
 * @name cm2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cm2App
 */
angular.module('cm2App')
  .controller('rootCtrl', function ($scope, getUserService) {
    getUserService.getUser().$promise.then(function(response) {
      $scope.userName = response.userName;
    });

    console.log('Root state');
  })

  .controller('CurrentDate', function ($scope)
  {
    $scope.date = new Date();
  });
