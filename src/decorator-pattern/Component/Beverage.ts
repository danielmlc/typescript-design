export abstract class  Beverage {
    description:string = "Unknown Beverage"
    public getDescription():string {
        return this.description
    }
    public abstract cost():number

}


