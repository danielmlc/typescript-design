"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mocha = void 0;
const Condiment_1 = require("./Condiment");
class Mocha extends Condiment_1.CondimentDecorator {
    constructor(beverage) {
        super();
        this.beverage = beverage;
    }
    getDescription() {
        return this.beverage.getDescription() + ", Mocha";
    }
    cost() {
        return 0.2 + this.beverage.cost();
    }
}
exports.Mocha = Mocha;
