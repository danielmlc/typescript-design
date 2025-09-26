import { CaffeineBeverage } from './caffeine-beverage';

// 另一个 ConcreteClass (Coffee)
export class Coffee extends CaffeineBeverage {
    protected brew(): void {
        console.log("Dripping Coffee through filter");
    }

    protected addCondiments(): void {
        console.log("Adding Sugar and Milk");
    }
}