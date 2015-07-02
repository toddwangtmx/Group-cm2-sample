'use strict';

angular.module('cm2App')
  .factory('getContractService', function($resource) {
    return $resource('json/contracts.json', {}, {
      getContract: {method: 'GET'}
    });
  });
