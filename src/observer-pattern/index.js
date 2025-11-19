"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WeatherData_1 = require("./subject/WeatherData");
const CurrentConditionsDisplay_1 = require("./observer/CurrentConditionsDisplay");
const StatisticsDisplay_1 = require("./observer/StatisticsDisplay");
let weatherData = new WeatherData_1.WeatherData();
let currentDisplay = new CurrentConditionsDisplay_1.CurrentConditionsDisplay(weatherData);
weatherData.setMeasurements(23, 34.5, 67);
// 添加观察者
let statisticsDisplay = new StatisticsDisplay_1.StatisticsDisplay(weatherData);
weatherData.setMeasurements(34, 56, 12);
weatherData.removeObserver(currentDisplay);
// 取消订阅
weatherData.setMeasurements(12, 67, 45);
weatherData.setMeasurements(3, 23, 23);
