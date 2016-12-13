angular
  .module('starter.templates')
  .factory('apiInfoService', apiInfoService);

  function apiInfoService($http) {
    var key = 'F166DBE7E6934487BB2AB53E0FA70109';
    var url = 'http://globalcurrencies.xignite.com/xGlobalCurrencies.json';

    var getCurrencyPairPromise = function(firstCurrency, secondCurrency) {
      var params = '/GetRealTimeRate?Symbol=' + firstCurrency + secondCurrency + '&_token=' + key;
      console.log(url + params);
      return $http({
        method: 'GET',
        url: url + params
      });
    };
    var getCurrencyList = function () {
      var params = '/ListActiveCurrencies?_token=' + key;
      console.log(url + params);
      return $http({
        method: 'GET',
        url: url + params
      });
    }
    return {
      getCurrencyPairPromise: getCurrencyPairPromise,
      getCurrencyList: getCurrencyList
    }
  }
