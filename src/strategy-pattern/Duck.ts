import { QuanckBehavior } from './QuanckBehavior/QuanckBehavior'
import { FlyBehavior } from './FlyBehavior/FlyBehavior'

export abstract class Duck {
    constructor() {}
    protected quanckBehavior: QuanckBehavior
    protected flyBehavior: FlyBehavior
    public swim() {
        console.log('我在游泳...');
    }
    /**
     * 外观
     */
    public display() {
        console.log('我是一直很普通的鸭子...');
    }
    /**
     * quack
     */
    public duckQuack() {
        this.quanckBehavior.quack();
    }

    public setQuanckBehavior(qb:QuanckBehavior) {
        this.quanckBehavior = qb;
    }
    /**
     * fly
     */
    public duckFly() {
        this.flyBehavior.fly();
    }

    public setFlyBehavior(fb:FlyBehavior) {
        this.flyBehavior = fb;
    }
}
