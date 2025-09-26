import { Quackable } from './quackable';
import { Observer } from '../observer/observer';
import { Observable } from '../observer/observable';

// DuckCall is a device that quacks, so it can be a Quackable.
export class DuckCall implements Quackable {
    private observable: Observable;

    constructor() {
        this.observable = new Observable(this);
    }

    public quack(): void {
        console.log("Kwak");
        this.notifyObservers();
    }

    public registerObserver(observer: Observer): void {
        this.observable.registerObserver(observer);
    }

    public notifyObservers(): void {
        this.observable.notifyObservers();
    }
}