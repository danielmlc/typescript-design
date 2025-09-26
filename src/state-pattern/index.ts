import { GumballMachine } from './context/gumball-machine';

/**
 * The client code to run the Gumball Machine simulation.
 */
function runGumballMachineSimulation() {
    // Create a gumball machine with 5 gumballs
    const gumballMachine = new GumballMachine(5);

    console.log(gumballMachine.toString());

    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();

    console.log(gumballMachine.toString());

    gumballMachine.insertQuarter();
    gumballMachine.ejectQuarter();
    gumballMachine.turnCrank(); // This should fail as the quarter was ejected

    console.log(gumballMachine.toString());

    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    gumballMachine.ejectQuarter();

    console.log(gumballMachine.toString());

    gumballMachine.insertQuarter();
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();

    console.log(gumballMachine.toString());
}

runGumballMachineSimulation();