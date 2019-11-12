import { CondimentDecorator } from "./Condiment";
import { Beverage } from "../Component/Beverage";

export class Milk extends CondimentDecorator {
    beverage:Beverage
    constructor(beverage:Beverage){
        super();
        this.beverage = beverage
    }
    public getDescription():string {
        return this.beverage.getDescription() + ", Milk"
    }
    public cost():number {
        return 0.5 + this.beverage.cost()
    }
}