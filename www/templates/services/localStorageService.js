angular
  .module('starter.templates')
  .factory('localStorageService', localStorageService);

  function localStorageService(apiInfoService) {

    function checkCurrencyList() {
    return !!localStorage.currencyList ||  setCurrencyList()
    }
    function setCurrencyList() {
      apiInfoService.getCurrencyList().then(function (resp) {
        var list = resp.data.CurrencyList.map(function (item) {
            return item.Symbol
        })
        console.log(list);
        localStorage.currencyList = JSON.stringify(list)
      })
    }
    function getCurrencyList() {
      return JSON.parse(localStorage.currencyList)
    }
    return {
      checkCurrencyList: checkCurrencyList,
      getCurrencyList: getCurrencyList
    }
  }
