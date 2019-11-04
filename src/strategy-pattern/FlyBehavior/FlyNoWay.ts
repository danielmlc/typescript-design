import { FlyBehavior } from './FlyBehavior'
export class FlyNoWay implements FlyBehavior {
    fly(){
        console.log('我是一只不会飞的笨鸭子。')
    };
 }
 