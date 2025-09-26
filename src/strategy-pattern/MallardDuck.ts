import { Duck } from './Duck';
import { FlyWithWings } from './FlyBehavior/FlyWithWings';
import { Quack } from './QuackBehavior/Quack';

export class MallardDuck extends Duck {
    constructor() {
        // A MallardDuck starts with the ability to quack and fly with wings.
        super(new Quack(), new FlyWithWings());
    }

    public display(): void {
        console.log("I'm a real Mallard duck!");
    }
}