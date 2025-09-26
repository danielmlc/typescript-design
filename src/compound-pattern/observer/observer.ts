import { QuackObservable } from './quack-observable';

// The Observer interface is implemented by all observers.
export interface Observer {
    update(duck: QuackObservable): void;
}