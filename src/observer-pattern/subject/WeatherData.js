"use strict";
exports.__esModule = true;
var WeatherData = /** @class */ (function () {
    function WeatherData() {
        this.observers = [];
    }
    WeatherData.prototype.registerObserver = function (o) {
        // 注册
        this.observers.push(o);
    };
    WeatherData.prototype.removeObserver = function (o) {
        // 移除
        var objIndex = 0;
        this.observers.forEach(function (item, index) {
            if (item.observerName === o.observerName) {
                objIndex = index;
            }
        });
        this.observers.splice(objIndex, 1);
    };
    WeatherData.prototype.notifyObservers = function () {
        var _this = this;
        // 通知
        this.observers.forEach(function (item) {
            item.update(_this.temperature, _this.humidity, _this.pressure);
        });
    };
    WeatherData.prototype.measurementsChanged = function () {
        this.notifyObservers();
    };
    WeatherData.prototype.setMeasurements = function (temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    };
    return WeatherData;
}());
exports.WeatherData = WeatherData;
