import { Quackable } from '../duck/quackable';
import { Observer } from '../observer/observer';

// The Flock class is a Composite that holds a group of Quackables.
export class Flock implements Quackable {
    private quackers: Quackable[] = [];

    public add(quacker: Quackable): void {
        this.quackers.push(quacker);
    }

    // When quack is called on a flock, it delegates the call to each of its quackers.
    public quack(): void {
        for (const quacker of this.quackers) {
            quacker.quack();
        }
    }

    // When registerObserver is called on a flock, it registers the observer with each of its quackers.
    public registerObserver(observer: Observer): void {
        for (const quacker of this.quackers) {
            quacker.registerObserver(observer);
        }
    }

    // A flock itself doesn't notify, the individual quackers do.
    public notifyObservers(): void {
        // This method is intentionally left blank.
        // The responsibility of notification is delegated to the individual ducks in the flock.
    }
}