import { Quackable } from '../duck/quackable';
import { Goose } from '../duck/goose';
import { Observer } from '../observer/observer';
import { Observable } from '../observer/observable';

// The GooseAdapter implements the Quackable interface, adapting a Goose to a Duck.
export class GooseAdapter implements Quackable {
    private goose: Goose;
    private observable: Observable;

    constructor(goose: Goose) {
        this.goose = goose;
        this.observable = new Observable(this);
    }

    // The quack method translates the call to the goose's honk method.
    public quack(): void {
        this.goose.honk();
        this.notifyObservers();
    }

    public registerObserver(observer: Observer): void {
        this.observable.registerObserver(observer);
    }

    public notifyObservers(): void {
        this.observable.notifyObservers();
    }
}