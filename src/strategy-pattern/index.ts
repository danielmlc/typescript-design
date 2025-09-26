import { MallardDuck } from './MallardDuck';
import { Duck } from './Duck';
import { FlyNoWay } from './FlyBehavior/FlyNoWay';
import { Squeak } from './QuackBehavior/Squeak';

/**
 * The client code, which demonstrates the use of the Strategy pattern.
 */
function runDuckSimulation() {
    console.log("--- Simulation 1: A standard Mallard Duck ---");
    const mallard: Duck = new MallardDuck();

    mallard.display();
    mallard.performQuack(); // Should perform the default Quack behavior
    mallard.performFly();   // Should perform the default FlyWithWings behavior
    mallard.swim();

    console.log("\n--- Simulation 2: A Mallard Duck with modified behavior ---");
    console.log("Oh no, the duck got a sore throat and hurt its wings!");

    // Change the behaviors dynamically at runtime.
    mallard.setQuackBehavior(new Squeak());
    mallard.setFlyBehavior(new FlyNoWay());

    // Demonstrate that the duck's behavior has changed.
    mallard.display();
    mallard.performQuack(); // Should now squeak
    mallard.performFly();   // Should now be unable to fly
}

runDuckSimulation();