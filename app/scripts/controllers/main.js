'use strict';

/**
 * @ngdoc function
 * @name ngWeatherApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngWeatherApp
 */
angular.module('ngWeatherApp')
  .controller('MainController', function (weatherService) {

    this.weatherService = weatherService;
    this.accessGranted = false;
    this.userInput = '';
    this.tempFormat = 'k'; // show temperature in C or K format.

    var _this = this;
    var getWeather = function (position) {
      console.log(position.coords);
      weatherService.getWeather(position.coords);
    };

    // Ask for permission
    this.weatherService.isLoading = true;
    if (navigator.geolocation) {
      this.accessGranted = typeof navigator.geolocation.getCurrentPosition(getWeather) !=='undefined';
    }else{
      console.log('no geolocation available.');
    }

    this.getWeather = function(){
      // Start Loader
      this.weatherService.isLoading = true;
      console.log('_this.userInput', _this.userInput);
      this.weatherService.userInput = _this.userInput;
      weatherService.getWeather();
    };

    this.updateTemp = function(format){
      var temp = (format === 'c') ? _this.weatherService.weatherData.main.temp - 273.15 : _this.weatherService.weatherData.main.temp;
      _this.weatherService.calculatedTemperature = temp;
      _this.tempFormat = format;
    };

  });
