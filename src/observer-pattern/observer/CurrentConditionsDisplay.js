"use strict";
exports.__esModule = true;
var CurrentConditionsDisplay = /** @class */ (function () {
    function CurrentConditionsDisplay(weatherData) {
        this.weatherData = weatherData;
        this.observerName = 'CurrentConditionsDisplay';
        weatherData.registerObserver(this);
    }
    CurrentConditionsDisplay.prototype.display = function () {
        var info = "\u3010CurrentConditionsDisplay\u3011Current Conditions:" + this.temperayure + "F degrees and " + this.humidity + "% humidity";
        console.log(info);
    };
    CurrentConditionsDisplay.prototype.update = function (temperature, humidity) {
        this.temperayure = temperature;
        this.humidity = humidity;
        this.display();
    };
    return CurrentConditionsDisplay;
}());
exports.CurrentConditionsDisplay = CurrentConditionsDisplay;
