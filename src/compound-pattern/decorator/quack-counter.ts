import { Quackable } from '../duck/quackable';
import { Observer } from '../observer/observer';

// The QuackCounter is a decorator that adds counting functionality to a Quackable.
export class QuackCounter implements Quackable {
    private duck: Quackable;
    private static numberOfQuacks: number = 0;

    constructor(duck: Quackable) {
        this.duck = duck;
    }

    public quack(): void {
        this.duck.quack();
        QuackCounter.numberOfQuacks++;
    }

    public static getQuacks(): number {
        return QuackCounter.numberOfQuacks;
    }

    public registerObserver(observer: Observer): void {
        this.duck.registerObserver(observer);
    }

    public notifyObservers(): void {
        this.duck.notifyObservers();
    }
}