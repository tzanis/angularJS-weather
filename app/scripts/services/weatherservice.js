'use strict';

/**
 * @ngdoc service
 * @name ngWeatherApp.weatherService
 * @description
 * # weatherService
 * Service in the ngWeatherApp.
 */
angular.module('ngWeatherApp')
  .service('weatherService', function ($http) {

    this.isLoading = false;
    this.userInput = '';
    this.weatherData = {};
    this.calculatedTemperature = '-';

    var _this = this;
    this.getWeather = function (coords) {

      coords = coords || {latitude: null, longitude: null };

      _this.isLoading = true;
      var params = {};
      if(_this.userInput !== ''){
        params.q = _this.userInput;
      }
      $http({
        url: 'http://api.openweathermap.org/data/2.5/weather?lat=' + coords.latitude + '&lon=' + coords.longitude + '&appid=21e3d4a8c7f055be78c45b767f1d87a0',
        method: 'GET',
        params: params
      }).then(function (response) {
        console.log(response.data);
        _this.isLoading = false;
        _this.weatherData = response.data;
        _this.calculatedTemperature = response.data.main.temp;
      });

    };
  });
