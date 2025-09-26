import { State } from './state';
import { GumballMachine } from '../context/gumball-machine';

// WinnerState handles the case where the user wins a second gumball for free.
export class WinnerState implements State {
    private gumballMachine: GumballMachine;

    constructor(gumballMachine: GumballMachine) {
        this.gumballMachine = gumballMachine;
    }

    public insertQuarter(): void {
        console.log("Please wait, we're already giving you a gumball");
    }

    public ejectQuarter(): void {
        console.log("Sorry, you already turned the crank");
    }

    public turnCrank(): void {
        console.log("Turning twice doesn't get you another gumball!");
    }

    public dispense(): void {
        console.log("YOU'RE A WINNER! You get two gumballs for your quarter");
        this.gumballMachine.releaseBall(); // Release the first ball
        if (this.gumballMachine.getCount() === 0) {
            // If that was the last gumball, transition to SoldOutState
            this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
        } else {
            this.gumballMachine.releaseBall(); // Release the second ball
            if (this.gumballMachine.getCount() > 0) {
                // If there are still gumballs, transition back to NoQuarterState
                this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
            } else {
                // If that was the last gumball, transition to SoldOutState
                console.log("Oops, out of gumballs!");
                this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
            }
        }
    }
}