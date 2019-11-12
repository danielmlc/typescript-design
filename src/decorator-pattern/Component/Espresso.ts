import { Beverage } from "./Beverage";

export class Espresso extends Beverage {
    constructor(){
        super();
        this.description = "Espresso"
    }
    public cost():number{
        return 0.89
    }
}