import { QuackBehavior } from './QuackBehavior';

export class MuteQuack implements QuackBehavior {
    public quack(): void {
        console.log("<< Silence >>");
    }
}