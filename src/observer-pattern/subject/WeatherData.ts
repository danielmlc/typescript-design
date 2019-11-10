import { Subject } from "./Subject";
import { Observer } from "../observer/Observer";


export class WeatherData implements Subject {
    private observers:Array<Observer>
    private temperature:Number
    private humidity:Number
    private pressure:Number
    constructor(){
        this.observers = []
    }
    public registerObserver(o:Observer) {
        // 注册
        this.observers.push(o)
    }
    public removeObserver(o:Observer) {
        // 移除
        let objIndex:number = 0
        this.observers.forEach((item,index)=>{
           if(item.observerName === o.observerName){
            objIndex = index
           }
        })
        this.observers.splice(objIndex,1)
    }
    public notifyObservers() {
        // 通知
        this.observers.forEach((item)=>{
            item.update(this.temperature,this.humidity,this.pressure)
        })
    }
    public measurementsChanged() {
        this.notifyObservers()
    }
    public setMeasurements(temperature:Number,humidity:Number,pressure:Number) {
        this.temperature =temperature
        this.humidity = humidity
        this.pressure = pressure
        this.measurementsChanged()
    }
}
