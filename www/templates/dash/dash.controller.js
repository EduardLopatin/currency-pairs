angular
  .module('starter.templates')
  .controller('dashCtrl', function ($scope, apiInfoService, localStorageService) {
    $scope.firstCurrency = 'USD';
    $scope.secondCurrency = 'EUR';
    $scope.currencyList = localStorageService.getCurrencyList();

    $scope.addCurrencyPair = function () {

    };
    // apiInfoService.getCurrencyPairPromise($scope.firstCurrency,$scope.secondCurrency).then(function (resp) {
    //   console.log(resp.data.Text)
    // });
    // apiInfoService.getCurrencyList().then(function (resp) {
    //   console.log(resp.data)
    // })

  });


