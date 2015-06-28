'use strict';

angular.module('cm2App')
  .factory('getUserService', function($resource) {
    return $resource('/api/getuser', {}, {
      getUser: {method: 'GET'}
    });
  });
