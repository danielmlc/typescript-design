import { FlyBehavior } from './FlyBehavior';

export class FlyNoWay implements FlyBehavior {
    public fly(): void {
        console.log("I can't fly.");
    }
}