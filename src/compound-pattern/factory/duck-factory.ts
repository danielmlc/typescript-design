import { AbstractDuckFactory } from './abstract-duck-factory';
import { Quackable } from '../duck/quackable';
import { MallardDuck } from '../duck/mallard-duck';
import { RedheadDuck } from '../duck/redhead-duck';
import { DuckCall } from '../duck/duck-call';
import { RubberDuck } from '../duck/rubber-duck';

// This factory creates ducks without any decorators.
export class DuckFactory extends AbstractDuckFactory {
    public createMallardDuck(): Quackable {
        return new MallardDuck();
    }

    public createRedheadDuck(): Quackable {
        return new RedheadDuck();
    }

    public createDuckCall(): Quackable {
        return new DuckCall();
    }

    public createRubberDuck(): Quackable {
        return new RubberDuck();
    }
}