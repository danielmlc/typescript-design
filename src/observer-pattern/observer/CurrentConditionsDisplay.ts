import { Observer } from "./Observer";
import { DisplayElement } from "./DisplayElement";
import { Subject } from "../subject/Subject";

export class CurrentConditionsDisplay implements Observer,DisplayElement{
    private temperayure:Number
    private humidity:Number
    private weatherData:Subject
    public observerName: String
    constructor(weatherData:Subject){
        this.weatherData = weatherData
        this.observerName = 'CurrentConditionsDisplay'
        weatherData.registerObserver(this)
    }
    public display(){
        const info = `【CurrentConditionsDisplay】Current Conditions:${this.temperayure}F degrees and ${this.humidity}% humidity`
        console.log(info)
    }
    public update(temperature:Number,humidity:Number){
       this.temperayure = temperature
       this.humidity = humidity
       this.display()
    }
}