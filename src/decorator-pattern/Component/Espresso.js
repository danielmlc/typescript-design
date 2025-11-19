"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Espresso = void 0;
const Beverage_1 = require("./Beverage");
class Espresso extends Beverage_1.Beverage {
    constructor() {
        super();
        this.description = "Espresso";
    }
    cost() {
        return 0.89;
    }
}
exports.Espresso = Espresso;
