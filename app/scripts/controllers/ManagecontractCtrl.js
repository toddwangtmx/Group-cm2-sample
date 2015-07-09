'use strict';
angular.module("cm2App", [])
.controller("ManagecontractCtrl", function($scope, $location) {
   $scope.redirect = function() {
       $scope.contracts = [];
        getContractService.getContract(function(response) {
           $scope.contracts = response.contracts;
    };
}
