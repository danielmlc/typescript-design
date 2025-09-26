import { QuackObservable } from '../observer/quack-observable';

// Quackable interface combines the ability to quack with being observable.
export interface Quackable extends QuackObservable {
    quack(): void;
}