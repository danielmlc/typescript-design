import { Beverage } from "./Component/Beverage";
import { Espresso } from "./Component/Espresso";
import { Milk } from "./Decorator/Milk";
import { Whip } from "./Decorator/Whip";
import { Mocha } from "./Decorator/Mocha";

let espresso:Beverage = new Espresso()
console.log(espresso.getDescription() + '$' + espresso.cost())
// +milk
espresso = new Milk(espresso)
console.log(espresso.getDescription() + '$' + espresso.cost())
// +whip
espresso = new Whip(espresso)
console.log(espresso.getDescription() + '$' + espresso.cost())
// +mocha
espresso = new Mocha(espresso)
console.log(espresso.getDescription() + '$' + espresso.cost())