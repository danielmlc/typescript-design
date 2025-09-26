import { Observer } from './observer';
import { QuackObservable } from './quack-observable';

// The Observable class implements the observer registration and notification logic.
export class Observable implements QuackObservable {
    private observers: Observer[] = [];
    private duck: QuackObservable;

    constructor(duck: QuackObservable) {
        this.duck = duck;
    }

    public registerObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    public notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this.duck);
        }
    }
}