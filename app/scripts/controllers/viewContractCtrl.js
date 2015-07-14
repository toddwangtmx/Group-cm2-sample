'use strict';

angular.module('cm2App')
    .controller('viewContractCtrl', function($scope, getContractService, $state) {
        $scope.contracts = [];
        getContractService.getContract(function(response) {
            $scope.contracts = response.contracts;
            $scope.removeRow = function(removeItem) {
                var contracts = $scope.contracts;
                var length = contracts.length;
                var removeIndex = -1;
                for (var ii = 0; ii < length; ii++) {
                    if (angular.equals(contracts[ii], removeItem)) {
                        removeIndex = ii;
                        break;
                    }
                }
                if (window.confirm("Are you sure???")) {
                    $scope.contracts.splice(removeIndex, 1);
                }
            }
            $scope.redirect = function() {
                $state.go('root.manageContract');
            }

        });
    });
