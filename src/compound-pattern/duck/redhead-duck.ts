import { Quackable } from './quackable';
import { Observer } from '../observer/observer';
import { Observable } from '../observer/observable';

// RedheadDuck is another concrete implementation of a quacking duck.
export class RedheadDuck implements Quackable {
    private observable: Observable;

    constructor() {
        this.observable = new Observable(this);
    }

    public quack(): void {
        console.log("Quack");
        this.notifyObservers();
    }

    public registerObserver(observer: Observer): void {
        this.observable.registerObserver(observer);
    }

    public notifyObservers(): void {
        this.observable.notifyObservers();
    }
}