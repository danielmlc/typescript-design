"use strict";
exports.__esModule = true;
var Espresso_1 = require("./Component/Espresso");
var Milk_1 = require("./Decorator/Milk");
var Whip_1 = require("./Decorator/Whip");
var Mocha_1 = require("./Decorator/Mocha");
var espresso = new Espresso_1.Espresso();
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
