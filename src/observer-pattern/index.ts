import { WeatherData } from "./subject/WeatherData";
import { CurrentConditionsDisplay } from "./observer/CurrentConditionsDisplay";
import { StatisticsDisplay } from "./observer/StatisticsDisplay";

let weatherData:WeatherData = new WeatherData()
let currentDisplay:CurrentConditionsDisplay = new CurrentConditionsDisplay(weatherData)
weatherData.setMeasurements(23,34.5,67);
let statisticsDisplay:StatisticsDisplay = new StatisticsDisplay(weatherData)
weatherData.setMeasurements(34,56,12);
weatherData.removeObserver(currentDisplay)
// 取消注册
weatherData.setMeasurements(12,67,45);
weatherData.setMeasurements(3,23,23);
