import { Observer } from "./Observer";
import { DisplayElement } from "./DisplayElement";
import { Subject } from "../subject/Subject";

export class StatisticsDisplay implements Observer,DisplayElement{
    private temperayure:Number
    private humidity:Number
    private pressure:Number
    public observerName: String
    private weatherData:Subject
    constructor(weatherData:Subject){
        this.weatherData = weatherData
        this.observerName = 'StatisticsDisplay'
        weatherData.registerObserver(this)
    }
    public display(){
        const info = `【StatisticsDisplay】Current Conditions:${this.temperayure}F degrees and ${this.humidity}% humidity and ${this.pressure} pressure`
        console.log(info)
    }
    public update(temperature:Number,humidity:Number,pressure:Number){
       this.temperayure = temperature
       this.humidity = humidity
       this.pressure = pressure
       this.display()
    }
}