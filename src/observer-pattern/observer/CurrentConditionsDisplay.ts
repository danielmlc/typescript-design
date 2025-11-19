import { Observer } from "./Observer";
import { DisplayElement } from "./DisplayElement";
import { Subject } from "../subject/Subject";

export class CurrentConditionsDisplay implements Observer, DisplayElement {
    private temperature: number = 0;
    private humidity: number = 0;
    private weatherData: Subject;
    public observerName: string;
    constructor(weatherData: Subject) {
        this.weatherData = weatherData
        this.observerName = 'CurrentConditionsDisplay'
        weatherData.registerObserver(this)
    }
    public display (): void {
        const info = `【CurrentConditionsDisplay】Current Conditions:${this.temperature}F degrees and ${this.humidity}% humidity`
        console.log(info)
    }
    public update (temperature: number, humidity: number, pressure: number): void {
        this.temperature = temperature
        this.humidity = humidity
        this.display()
    }
}