"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Milk = void 0;
const Condiment_1 = require("./Condiment");
class Milk extends Condiment_1.CondimentDecorator {
    constructor(beverage) {
        super();
        this.beverage = beverage;
    }
    getDescription() {
        return this.beverage.getDescription() + ", Milk";
    }
    cost() {
        return 0.5 + this.beverage.cost();
    }
}
exports.Milk = Milk;
