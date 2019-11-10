"use strict";
exports.__esModule = true;
var WeatherData_1 = require("./subject/WeatherData");
var CurrentConditionsDisplay_1 = require("./observer/CurrentConditionsDisplay");
var StatisticsDisplay_1 = require("./observer/StatisticsDisplay");
var weatherData = new WeatherData_1.WeatherData();
var currentDisplay = new CurrentConditionsDisplay_1.CurrentConditionsDisplay(weatherData);
weatherData.setMeasurements(23, 34.5, 67);
var statisticsDisplay = new StatisticsDisplay_1.StatisticsDisplay(weatherData);
weatherData.setMeasurements(34, 56, 12);
weatherData.removeObserver(currentDisplay);
// 取消注册
weatherData.setMeasurements(12, 67, 45);
weatherData.setMeasurements(3, 23, 23);
