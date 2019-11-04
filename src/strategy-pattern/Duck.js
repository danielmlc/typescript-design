"use strict";
exports.__esModule = true;
var Duck = /** @class */ (function () {
    function Duck() {
    }
    Duck.prototype.swim = function () {
        console.log('我在游泳...');
    };
    /**
     * 外观
     */
    Duck.prototype.display = function () {
        console.log('我是一直很普通的鸭子...');
    };
    /**
     * quack
     */
    Duck.prototype.duckQuack = function () {
        this.quanckBehavior.quack();
    };
    Duck.prototype.setQuanckBehavior = function (qb) {
        this.quanckBehavior = qb;
    };
    /**
     * fly
     */
    Duck.prototype.duckFly = function () {
        this.flyBehavior.fly();
    };
    Duck.prototype.setFlyBehavior = function (fb) {
        this.flyBehavior = fb;
    };
    return Duck;
}());
exports.Duck = Duck;
