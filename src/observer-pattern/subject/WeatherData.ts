import { Subject } from "./Subject";
import { Observer } from "../observer/Observer";


export class WeatherData implements Subject {
    private observers: Array<Observer>
    private temperature: number = 0;
    private humidity: number = 0;
    private pressure: number = 0;
    constructor() {
        this.observers = []
    }
    public registerObserver (o: Observer): void {
        // 注册
        this.observers.push(o)
    }
    public removeObserver (o: Observer): void {
        // 移除
        let objIndex: number = -1
        this.observers.forEach((item, index) => {
            if (item.observerName === o.observerName) {
                objIndex = index
            }
        })
        if (objIndex >= 0) {
            this.observers.splice(objIndex, 1)
        }
    }
    public notifyObservers (): void {
        // 通知
        this.observers.forEach((item) => {
            item.update(this.temperature, this.humidity, this.pressure)
        })
    }
    public measurementsChanged (): void {
        this.notifyObservers()
    }
    public setMeasurements (temperature: number, humidity: number, pressure: number): void {
        this.temperature = temperature
        this.humidity = humidity
        this.pressure = pressure
        this.measurementsChanged()
    }
}
