"use strict";
exports.__esModule = true;
var StatisticsDisplay = /** @class */ (function () {
    function StatisticsDisplay(weatherData) {
        this.weatherData = weatherData;
        this.observerName = 'StatisticsDisplay';
        weatherData.registerObserver(this);
    }
    StatisticsDisplay.prototype.display = function () {
        var info = "\u3010StatisticsDisplay\u3011Current Conditions:" + this.temperayure + "F degrees and " + this.humidity + "% humidity and " + this.pressure + " pressure";
        console.log(info);
    };
    StatisticsDisplay.prototype.update = function (temperature, humidity, pressure) {
        this.temperayure = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.display();
    };
    return StatisticsDisplay;
}());
exports.StatisticsDisplay = StatisticsDisplay;
