import { State } from './state';
import { GumballMachine } from '../context/gumball-machine';

// HasQuarterState is another concrete state.
export class HasQuarterState implements State {
    private gumballMachine: GumballMachine;

    constructor(gumballMachine: GumballMachine) {
        this.gumballMachine = gumballMachine;
    }

    public insertQuarter(): void {
        console.log("You can't insert another quarter");
    }

    public ejectQuarter(): void {
        console.log("Quarter returned");
        // Transition back to the NoQuarterState
        this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
    }

    public turnCrank(): void {
        console.log("You turned the crank...");
        const winner = Math.floor(Math.random() * 10); // 10% chance to be a winner
        if ((winner === 0) && (this.gumballMachine.getCount() > 1)) {
            this.gumballMachine.setState(this.gumballMachine.getWinnerState());
        } else {
            this.gumballMachine.setState(this.gumballMachine.getSoldState());
        }
    }

    public dispense(): void {
        console.log("No gumball dispensed");
    }
}