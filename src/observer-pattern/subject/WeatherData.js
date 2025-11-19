"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherData = void 0;
class WeatherData {
    constructor() {
        this.temperature = 0;
        this.humidity = 0;
        this.pressure = 0;
        this.observers = [];
    }
    registerObserver(o) {
        // 注册
        this.observers.push(o);
    }
    removeObserver(o) {
        // 移除
        let objIndex = -1;
        this.observers.forEach((item, index) => {
            if (item.observerName === o.observerName) {
                objIndex = index;
            }
        });
        if (objIndex >= 0) {
            this.observers.splice(objIndex, 1);
        }
    }
    notifyObservers() {
        // 通知
        this.observers.forEach((item) => {
            item.update(this.temperature, this.humidity, this.pressure);
        });
    }
    measurementsChanged() {
        this.notifyObservers();
    }
    setMeasurements(temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    }
}
exports.WeatherData = WeatherData;
