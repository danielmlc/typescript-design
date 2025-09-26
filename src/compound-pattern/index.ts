import { AbstractDuckFactory } from './factory/abstract-duck-factory';
import { CountingDuckFactory } from './factory/counting-duck-factory';
import { Quackable } from './duck/quackable';
import { Goose } from './duck/goose';
import { GooseAdapter } from './adapter/goose-adapter';
import { Flock } from './composite/flock';
import { QuackCounter } from './decorator/quack-counter';
import { Quackologist } from './observer/quackologist';

/**
 * The main simulator function that brings all the patterns together.
 */
function simulate(duckFactory: AbstractDuckFactory) {
    // Use the factory to create ducks
    const mallardDuck: Quackable = duckFactory.createMallardDuck();
    const redheadDuck: Quackable = duckFactory.createRedheadDuck();
    const duckCall: Quackable = duckFactory.createDuckCall();
    const rubberDuck: Quackable = duckFactory.createRubberDuck();
    // Adapt a goose to be a quackable
    const gooseDuck: Quackable = new GooseAdapter(new Goose());

    console.log("\nDuck Simulator: With Composite - Flocks");

    // Create a flock of ducks
    const flockOfDucks = new Flock();
    flockOfDucks.add(redheadDuck);
    flockOfDucks.add(duckCall);
    flockOfDucks.add(rubberDuck);
    flockOfDucks.add(gooseDuck);

    // Create a flock of mallards
    const flockOfMallards = new Flock();
    const mallardOne = duckFactory.createMallardDuck();
    const mallardTwo = duckFactory.createMallardDuck();
    const mallardThree = duckFactory.createMallardDuck();
    const mallardFour = duckFactory.createMallardDuck();
    flockOfMallards.add(mallardOne);
    flockOfMallards.add(mallardTwo);
    flockOfMallards.add(mallardThree);
    flockOfMallards.add(mallardFour);

    // Add the flock of mallards to the main flock
    flockOfDucks.add(flockOfMallards);

    console.log("\nDuck Simulator: With Observer");
    const quackologist = new Quackologist();
    // Register the observer with the flock
    flockOfDucks.registerObserver(quackologist);

    console.log("\nSimulating the whole flock...");
    simulateQuack(flockOfDucks);

    console.log("\nSimulating an individual duck...");
    simulateQuack(mallardDuck);

    console.log(`\nThe ducks quacked ${QuackCounter.getQuacks()} times`);
}

function simulateQuack(duck: Quackable) {
    duck.quack();
}

// Run the simulation with a counting factory
const countingDuckFactory = new CountingDuckFactory();
simulate(countingDuckFactory);