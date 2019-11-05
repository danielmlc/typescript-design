import { MallardDuck } from './MallardDuck'
import { Duck } from './Duck'
import { FlyWithWings } from './FlyBehavior/FlyWithWings'
import { FlyNoWay } from './FlyBehavior/FlyNoWay'
let mallardDuck: Duck = new MallardDuck()
// mallardDuck.duckQuack()
// mallardDuck.duckFly()

mallardDuck.swim()
mallardDuck.display()
mallardDuck.display()
mallardDuck.setFlyBehavior(new FlyWithWings())
mallardDuck.duckFly()

// 切换属性
mallardDuck.setFlyBehavior(new FlyNoWay())
mallardDuck.duckFly()

