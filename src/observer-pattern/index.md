# 观察者模式 (Observer Pattern)

## 意图

**观察者模式**是一种行为设计模式，它允许你定义一种订阅机制，当一个对象（“主题”）的状态发生改变时，能够自动通知所有依赖于它的对象（“观察者”）。

换句话说，它在对象之间建立一种一对多的依赖关系，当一方改变状态时，所有依赖者都会收到通知并自动更新。

## 场景

想象一个气象站应用。`WeatherData` 对象负责从物理传感器获取最新的气象数据（温度、湿度、气压）。我们希望有多个不同的布告板（`Display`）可以展示这些数据：
*   一个 `CurrentConditionsDisplay` 只显示当前的温度和湿度。
*   一个 `StatisticsDisplay` 显示最高、最低和平均温度。
*   未来可能还会有 `ForecastDisplay` 来预报天气。

如果让 `WeatherData` 对象直接去调用每个布告板的更新方法，那么每当新增一个布告板时，我们都必须去修改 `WeatherData` 的代码。这违反了“开闭原则”，并使 `WeatherData` 与具体的布告板类紧密耦合。

观察者模式解决了这个问题。它将 `WeatherData` 变成一个“主题”（Subject），并提供方法让其他对象（“观察者”）可以订阅或取消订阅它。当 `WeatherData` 的状态更新时，它会遍历其内部的观察者列表，并调用每个观察者的 `update` 方法，而无需关心观察者具体是谁，或者它们会如何处理这些更新。

## 结构

1.  **主题 (Subject)**: (`Subject` 接口)
    *   定义了管理观察者的接口：`registerObserver` (注册), `removeObserver` (移除), 和 `notifyObservers` (通知)。
    ```typescript
    // src/observer-pattern/subject/Subject.ts
    export interface Subject {
        registerObserver(o: Observer): void;
        removeObserver(o: Observer): void;
        notifyObservers(): void;
    }
    ```

2.  **观察者 (Observer)**: (`Observer` 接口)
    *   定义了所有具体观察者必须实现的更新接口，通常是一个 `update` 方法。
    ```typescript
    // src/observer-pattern/observer/Observer.ts
    export interface Observer {
        update(temp: number, humidity: number, pressure: number): void;
    }
    ```

3.  **具体主题 (Concrete Subject)**: (`WeatherData` 类)
    *   实现了主题接口。它维护着自身的状态，并在状态改变时通知所有注册的观察者。
    ```typescript
    // src/observer-pattern/subject/WeatherData.ts
    export class WeatherData implements Subject {
        private observers: Observer[] = [];
        private temperature: number;
        // ... other properties

        public registerObserver(o: Observer): void {
            this.observers.push(o);
        }

        public notifyObservers(): void {
            for (const observer of this.observers) {
                observer.update(this.temperature, this.humidity, this.pressure);
            }
        }

        public setMeasurements(temperature: number, humidity: number, pressure: number): void {
            this.temperature = temperature;
            // ... set other properties
            this.notifyObservers(); // Notify observers when state changes
        }
    }
    ```

4.  **具体观察者 (Concrete Observer)**: (`CurrentConditionsDisplay` 类)
    *   实现了观察者接口。当它的 `update` 方法被调用时，它会执行相应的操作。
    ```typescript
    // src/observer-pattern/observer/CurrentConditionsDisplay.ts
    export class CurrentConditionsDisplay implements Observer, DisplayElement {
        private temperature: number;
        private humidity: number;
        private weatherData: Subject;

        constructor(weatherData: Subject) {
            this.weatherData = weatherData;
            weatherData.registerObserver(this); // Register itself with the subject
        }

        public update(temperature: number, humidity: number, pressure: number): void {
            this.temperature = temperature;
            this.humidity = humidity;
            this.display(); // Update its display when state changes
        }

        public display(): void {
            console.log(`Current conditions: ${this.temperature}F degrees and ${this.humidity}% humidity`);
        }
    }
    ```

## 优点

*   **开闭原则**: 你可以在不修改现有主题或观察者代码的情况下，引入新的观察者。
*   **松耦合**: 主题只知道它有一系列的观察者，每个观察者都实现了 `Observer` 接口。它不知道观察者的具体类别，这大大降低了主题和观察者之间的耦合度。
*   **广播通信**: 主题可以向任意数量的观察者广播通知，而无需关心接收者是谁。

## 如何运行示例

你可以通过以下命令来运行这个 TypeScript 示例：

```bash
npx ts-node src/observer-pattern/index.ts
```