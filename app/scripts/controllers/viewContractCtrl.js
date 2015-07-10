'use strict';

angular.module('cm2App')
    .controller('viewContractCtrl', function($scope, getContractService, $state) {
        $scope.contracts = [];
        getContractService.getContract(function(response) {
           $scope.contracts = response.contracts;
           console.log(response.contracts);
           $scope.removeRow = function(name){
		   var index = -1;		
		   var comArr = eval( $scope.contracts );
		   for( var i = 0; i < comArr.length; i++ ) {
			if( comArr[i].name === name ) {
				index = i;
				break;
			}
		    }
		    if( index === -1 ) {
			  alert( "Something gone wrong" );
		    }
		    var confir=confirm("Do you want to delete?");
		    if(confir===true){
		      $scope.contracts.splice( index, 1 );
		      alert("success");
		    }
		    else{
			  alert("canceled");
		    }		
	};   
	$scope.redirect=function(){
		$state.go('root.Managecontract');
	}  
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
