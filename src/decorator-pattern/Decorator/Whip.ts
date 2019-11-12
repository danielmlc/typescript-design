import { CondimentDecorator } from "./Condiment";
import { Beverage } from "../Component/Beverage";

export class Whip extends CondimentDecorator {
    beverage:Beverage
    constructor(beverage:Beverage){
        super();
        this.beverage = beverage
    }
    public getDescription():string {
        return this.beverage.getDescription() + ", Whip"
    }
    public cost():number {
        return 0.35 + this.beverage.cost()
    }
}