'use strict';

angular.module('cm2App')
    .controller('viewContractCtrl', function($scope, getContractService, $state) {
        $scope.contracts = [];
        getContractService.getContract(function(response) {
            $scope.contracts = response.contracts;
            console.log(response.contracts);

            $scope.removeRow = function(index) {
                if (window.confirm("Are you sure???")) {
                    $scope.contracts.splice(index, 1);
                }
            }
            $scope.redirect = function() {
                $state.go('root.manageContract');
            }

        });
    });
