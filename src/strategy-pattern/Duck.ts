import { QuanckBehavior } from './QuanckBehavior'
import { FlyBehavior } from './FlyBehavior'

export class Duck implements FlyBehavior,QuanckBehavior {
    constructor() {}
    
    public swim() {
        console.log('我在快乐的游泳...');
    }
    /**
     * 外观
     */
    public display() {}

    /**
     * name
     */
    public name() {
        
    }
}
