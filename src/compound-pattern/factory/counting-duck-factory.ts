import { AbstractDuckFactory } from './abstract-duck-factory';
import { Quackable } from '../duck/quackable';
import { MallardDuck } from '../duck/mallard-duck';
import { RedheadDuck } from '../duck/redhead-duck';
import { DuckCall } from '../duck/duck-call';
import { RubberDuck } from '../duck/rubber-duck';
import { QuackCounter } from '../decorator/quack-counter';

// This factory creates ducks that are decorated with the QuackCounter.
export class CountingDuckFactory extends AbstractDuckFactory {
    public createMallardDuck(): Quackable {
        return new QuackCounter(new MallardDuck());
    }

    public createRedheadDuck(): Quackable {
        return new QuackCounter(new RedheadDuck());
    }

    public createDuckCall(): Quackable {
        return new QuackCounter(new DuckCall());
    }

    public createRubberDuck(): Quackable {
        return new QuackCounter(new RubberDuck());
    }
}