import { CondimentDecorator } from "./Condiment";
import { Beverage } from "../Component/Beverage";

export class Mocha extends CondimentDecorator {
    beverage:Beverage
    constructor(beverage:Beverage){
        super();
        this.beverage = beverage
    }
    public getDescription():string {
        return this.beverage.getDescription() + ", Mocha"
    }
    public cost():number {
        return 0.2 + this.beverage.cost()
    }
}