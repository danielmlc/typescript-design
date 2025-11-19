"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentConditionsDisplay = void 0;
class CurrentConditionsDisplay {
    constructor(weatherData) {
        this.temperature = 0;
        this.humidity = 0;
        this.weatherData = weatherData;
        this.observerName = 'CurrentConditionsDisplay';
        weatherData.registerObserver(this);
    }
    display() {
        const info = `【CurrentConditionsDisplay】Current Conditions:${this.temperature}F degrees and ${this.humidity}% humidity`;
        console.log(info);
    }
    update(temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.display();
    }
}
exports.CurrentConditionsDisplay = CurrentConditionsDisplay;
