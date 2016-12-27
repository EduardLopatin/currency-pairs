angular
  .module('starter.templates')
  .factory('localStorageService', localStorageService);

  function localStorageService(apiInfoService) {

    function checkCurrencyList() {
      return !!localStorage.currencyList ||  setCurrencyList()
    }
    function checkCurrencyPairList() {
      return !!localStorage.currencyPairList || (localStorage.currencyPairList = '[]')
    }
    function setLocalCurrencyList() {
      apiInfoService.getCurrencyList().then(function (resp) {
        var list = resp.data.CurrencyList.map(function (item) {
            return item.Symbol
        })
        console.log(list);
        localStorage.currencyList = JSON.stringify(list)
      })
    }
    function getCurrencyPairList() {
      return localStorage.currencyPairList
    }
    var setCurrencyPair = function (item) {

    }
    function getLocalCurrencyList() {
      return JSON.parse(localStorage.currencyList)
    }
    return {
      checkCurrencyList: checkCurrencyList,
      setLocalCurrencyList: setLocalCurrencyList,
      getLocalCurrencyList: getLocalCurrencyList,

      setCurrencyPair: setCurrencyPair,
      checkCurrencyPairList: checkCurrencyPairList
    }
  }
