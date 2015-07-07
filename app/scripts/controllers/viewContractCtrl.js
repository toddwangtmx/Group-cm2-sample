'use strict';

angular.module('cm2App')
    .controller('viewContractCtrl', function($scope, getContractService) {
        $scope.contracts = [];
        getContractService.getContract(function(response) {
            $scope.contracts = response.contracts;
             console.log(response.contracts);
        });
    });
