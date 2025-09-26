import { State } from './state';
import { GumballMachine } from '../context/gumball-machine';

// SoldState handles the state of the machine while it's dispensing a gumball.
export class SoldState implements State {
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
        this.gumballMachine.releaseBall();
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