import { Quackable } from './quackable';
import { Observer } from '../observer/observer';
import { Observable } from '../observer/observable';

// MallardDuck is a concrete implementation of a quacking duck.
export class MallardDuck implements Quackable {
    private observable: Observable;

    constructor() {
        // We compose with the Observable helper class.
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