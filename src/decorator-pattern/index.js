"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Espresso_1 = require("./Component/Espresso");
const Milk_1 = require("./Decorator/Milk");
const Whip_1 = require("./Decorator/Whip");
const Mocha_1 = require("./Decorator/Mocha");
let espresso = new Espresso_1.Espresso();
console.log(espresso.getDescription() + '$' + espresso.cost());
// +milk
espresso = new Milk_1.Milk(espresso);
console.log(espresso.getDescription() + '$' + espresso.cost());
// +whip
espresso = new Whip_1.Whip(espresso);
console.log(espresso.getDescription() + '$' + espresso.cost());
// +mocha
espresso = new Mocha_1.Mocha(espresso);
console.log(espresso.getDescription() + '$' + espresso.cost());
