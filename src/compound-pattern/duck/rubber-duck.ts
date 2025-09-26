import { Quackable } from './quackable';
import { Observer } from '../observer/observer';
import { Observable } from '../observer/observable';

// RubberDuck is a Quackable, but it squeaks instead of quacking.
export class RubberDuck implements Quackable {
    private observable: Observable;

    constructor() {
        this.observable = new Observable(this);
    }

    public quack(): void {
        console.log("Squeak");
        this.notifyObservers();
    }

    public registerObserver(observer: Observer): void {
        this.observable.registerObserver(observer);
    }

    public notifyObservers(): void {
        this.observable.notifyObservers();
    }
}