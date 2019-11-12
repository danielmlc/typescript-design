import { Beverage } from "./Beverage";

export class HouseBlend extends Beverage {
    constructor(){
        super(); // 执行父类的构造函数
        this.description = "House Blend Coffee"
    }
    public cost():number{
        return 1.25
    }
}

