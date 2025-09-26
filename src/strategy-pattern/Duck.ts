import { QuackBehavior } from './QuackBehavior/QuackBehavior';
import { FlyBehavior } from './FlyBehavior/FlyBehavior';

export abstract class Duck {
    protected quackBehavior: QuackBehavior;
    protected flyBehavior: FlyBehavior;

    // We delegate setting the behavior to the subclasses.
    constructor(quackBehavior: QuackBehavior, flyBehavior: FlyBehavior) {
        this.quackBehavior = quackBehavior;
        this.flyBehavior = flyBehavior;
    }

    public swim(): void {
        console.log('All ducks float, even decoys!');
    }

    /**
     * The appearance of the duck. This is specific to each duck type and must be implemented by subclasses.
     */
    public abstract display(): void;

    /**
     * Delegates the fly action to the fly behavior object.
     */
    public performFly(): void {
        this.flyBehavior.fly();
    }

    /**
     * Delegates the quack action to the quack behavior object.
     */
    public performQuack(): void {
        this.quackBehavior.quack();
    }

    /**
     * Allows changing the fly behavior at runtime.
     */
    public setFlyBehavior(fb: FlyBehavior): void {
        console.log("--- Changing fly behavior ---");
        this.flyBehavior = fb;
    }

    /**
     * Allows changing the quack behavior at runtime.
     */
    public setQuackBehavior(qb: QuackBehavior): void {
        console.log("--- Changing quack behavior ---");
        this.quackBehavior = qb;
    }
}