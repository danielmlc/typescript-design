import { QuackBehavior } from './QuackBehavior';

export class Squeak implements QuackBehavior {
    public quack(): void {
        console.log("Squeak");
    }
}