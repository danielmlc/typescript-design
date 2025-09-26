import { FlyBehavior } from './FlyBehavior';

export class FlyWithWings implements FlyBehavior {
    public fly(): void {
        console.log("I'm flying!");
    }
}