'use strict';

angular.module('cm2App')
  .factory('getContractService', function($resource) {
    return $resource('/api/contractList', {}, {
      getContract: {method: 'GET'}
    });
  });
