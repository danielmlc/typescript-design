import { Observer } from './observer';

// The QuackObservable interface is implemented by all observable objects.
export interface QuackObservable {
    registerObserver(observer: Observer): void;
    notifyObservers(): void;
}