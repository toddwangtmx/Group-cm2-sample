'use strict';

describe('Controller: viewContractCtrl', function () {

  // load the controller's module
  beforeEach(module('cm2App'));

  var viewContractCtrlTest,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    viewContractCtrlTest = $controller('viewContractCtrl', {
      $scope: scope
    });
  }));

  it('should delete a to the scope', function () {
    scope.contracts = [
      { 
        contractName: 'KMC-BLS-triparty-contract',
        template: 'N',
        provider: 'KMC',
        receiver: 'BL-Stone',
        type: 'Tri-party',
        value: 2100,
        id: '001'
      },
      {
        contractName: 'GMS-BLS-triparty-contract',
        template: 'N',
        provider: 'GM-Sach',
        receiver: 'BL-Stone',
        type: 'Tri-party',
        value: 1100,
        id: '002'
      },
      {
        contractName: 'KMC-triparty-template',
        template: 'Y',
        provider: 'KMC',
        receiver: '',
        type: 'Tri-party',
        value: 0,
        id: '003'
      },
      {
        contractName: 'GMS-KMC-triparty-contract',
        template: 'N',
        provider: 'GM-sach',
        receiver: 'KMC',
        type: 'Tri-party',
        value: 4500,
        id: '004'
      },
      {
        contractName: 'BNY-MEL-triparty-contract',
        template: 'N',
        provider: 'BNY',
        receiver: 'Mellon',
        type: 'Tri-party',
        value: 345,
        id: '005'
      },
      {
        contractName: 'DMS-Dealer-template',
        template: 'Y',
        provider: 'DMS',
        receiver: '',
        type: 'Dealer-preference',
        value: 0,
        id: '006'
      },
      {
        contractName: 'DMS-Dealer-contract',
        template: 'N',
        provider: 'DMS',
        receiver: '',
        type: 'Dealer-preference',
        value: 1200,
        id: '007'
      },
      {
        contractName: 'GMS-Dealer-contract',
        template: 'N',
        provider: 'GM-sach',
        receiver: '',
        type: 'Dealer-preference',
        value: 800,
        id: '008'
      },
      {
        contractName: 'GBC-JPMC-triparty-contract',
        template: 'N',
        provider: 'GBC',
        receiver: 'JPM-chase',
        type: 'Tri-party',
        value: 5020,
        id: '009'
      },
      {
        contractName: 'JPMC-GMS-triparty-contract',
        template: 'N',
        provider: 'JPM-chase',
        receiver: 'GM-sach',
        type: 'Tri-party',
        value: 1800,
        id: '010'
      }  
    ];
    var leg = scope.contracts.length;
    var test = {
        contractName: 'KMC-BLS-triparty-contract',
        template: 'N',
        provider: 'KMC',
        receiver: 'BL-Stone',
        type: 'Tri-party',
        value: 2100,
        id: '001'
      };
    scope.removeRow(test);
    expect(scope.contracts.length).toEqual(leg-1);
  });
});