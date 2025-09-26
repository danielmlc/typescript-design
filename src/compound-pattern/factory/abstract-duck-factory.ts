import { Quackable } from '../duck/quackable';

// The Abstract Factory interface declares a set of methods for creating each of the abstract products.
export abstract class AbstractDuckFactory {
    public abstract createMallardDuck(): Quackable;
    public abstract createRedheadDuck(): Quackable;
    public abstract createDuckCall(): Quackable;
    public abstract createRubberDuck(): Quackable;
}