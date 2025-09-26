import { Observer } from './observer';
import { QuackObservable } from './quack-observable';

// The Quackologist is a concrete observer.
export class Quackologist implements Observer {
    public update(duck: QuackObservable): void {
        console.log(`Quackologist: ${duck.constructor.name} just quacked.`);
    }
}