import { Observer } from "./Observer";
import { DisplayElement } from "./DisplayElement";
import { Subject } from "../subject/Subject";

export class StatisticsDisplay implements Observer, DisplayElement {
    private temperature: number = 0;
    private humidity: number = 0;
    private pressure: number = 0;
    public observerName: string;
    private weatherData: Subject;
    constructor(weatherData: Subject) {
        this.weatherData = weatherData
        this.observerName = 'StatisticsDisplay'
        weatherData.registerObserver(this)
    }
    public display (): void {
        const info = `【StatisticsDisplay】Current Conditions:${this.temperature}F degrees and ${this.humidity}% humidity and ${this.pressure} pressure`
        console.log(info)
    }
    public update (temperature: number, humidity: number, pressure: number): void {
        this.temperature = temperature
        this.humidity = humidity
        this.pressure = pressure
        this.display()
    }
}