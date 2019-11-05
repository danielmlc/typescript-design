"use strict";
exports.__esModule = true;
var MallardDuck_1 = require("./MallardDuck");
var FlyWithWings_1 = require("./FlyBehavior/FlyWithWings");
var FlyNoWay_1 = require("./FlyBehavior/FlyNoWay");
var Squeak_1 = require("./QuanckBehavior/Squeak");
var mallardDuck = new MallardDuck_1.MallardDuck();
// mallardDuck.duckQuack()
// mallardDuck.duckFly()
mallardDuck.swim();
mallardDuck.display();
mallardDuck.display();
mallardDuck.setFlyBehavior(new FlyWithWings_1.FlyWithWings());
mallardDuck.duckFly();
// 切换属性
mallardDuck.setFlyBehavior(new FlyNoWay_1.FlyNoWay());
mallardDuck.duckFly();
mallardDuck.setQuanckBehavior(new Squeak_1.Squeak());
mallardDuck.duckQuack();
