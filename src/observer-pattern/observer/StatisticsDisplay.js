"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticsDisplay = void 0;
class StatisticsDisplay {
    constructor(weatherData) {
        this.temperature = 0;
        this.humidity = 0;
        this.pressure = 0;
        this.weatherData = weatherData;
        this.observerName = 'StatisticsDisplay';
        weatherData.registerObserver(this);
    }
    display() {
        const info = `【StatisticsDisplay】Current Conditions:${this.temperature}F degrees and ${this.humidity}% humidity and ${this.pressure} pressure`;
        console.log(info);
    }
    update(temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.display();
    }
}
exports.StatisticsDisplay = StatisticsDisplay;
