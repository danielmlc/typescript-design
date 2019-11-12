import { Beverage } from "../Component/Beverage";

export abstract class CondimentDecorator extends Beverage {
   public abstract getDescription():string
}