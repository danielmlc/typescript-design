"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Whip = void 0;
const Condiment_1 = require("./Condiment");
class Whip extends Condiment_1.CondimentDecorator {
    constructor(beverage) {
        super();
        this.beverage = beverage;
    }
    getDescription() {
        return this.beverage.getDescription() + ", Whip";
    }
    cost() {
        return 0.35 + this.beverage.cost();
    }
}
exports.Whip = Whip;
