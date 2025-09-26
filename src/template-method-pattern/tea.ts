import { CaffeineBeverage } from './caffeine-beverage';

// ConcreteClass (Tea) 实现了父类中声明的抽象步骤。
export class Tea extends CaffeineBeverage {
    protected brew(): void {
        console.log("Steeping the tea");
    }

    protected addCondiments(): void {
        console.log("Adding Lemon");
    }
}