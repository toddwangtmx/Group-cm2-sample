'use strict';

/**
 * @ngdoc overview
 * @name cm2App
 * @description
 * # cm2App
 *
 * Main module of the application.
 */
angular
  .module('cm2App', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ui.bootstrap'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/root/viewContract');

    $stateProvider
      .state('root', {
        url: '/root',
        templateUrl: 'views/main.html',
        controller: 'rootCtrl',
        abstract: true
      })
      .state('root.viewContract', {
        url: '/viewContract',
        templateUrl: 'views/viewContract.html',
        controller: 'viewContractCtrl'
      });
  });


