import { State } from '../state/state';
import { NoQuarterState } from '../state/no-quarter-state';
import { HasQuarterState } from '../state/has-quarter-state';
import { SoldState } from '../state/sold-state';
import { SoldOutState } from '../state/sold-out-state';
import { WinnerState } from '../state/winner-state';

// The Context class (GumballMachine) defines the interface of interest to clients.
// It also maintains a reference to an instance of a State subclass, which represents the current state of the context.
export class GumballMachine {
    // All possible states of the machine
    private soldOutState: State;
    private noQuarterState: State;
    private hasQuarterState: State;
    private soldState: State;
    private winnerState: State;

    private currentState: State;
    private count: number = 0; // Number of gumballs

    constructor(numberGumballs: number) {
        this.soldOutState = new SoldOutState(this);
        this.noQuarterState = new NoQuarterState(this);
        this.hasQuarterState = new HasQuarterState(this);
        this.soldState = new SoldState(this);
        this.winnerState = new WinnerState(this);

        this.count = numberGumballs;
        if (numberGumballs > 0) {
            this.currentState = this.noQuarterState;
        } else {
            this.currentState = this.soldOutState;
        }
    }

    // Actions are delegated to the current state
    public insertQuarter(): void {
        this.currentState.insertQuarter();
    }

    public ejectQuarter(): void {
        this.currentState.ejectQuarter();
    }

    public turnCrank(): void {
        this.currentState.turnCrank();
        this.currentState.dispense(); // This is an internal action, not called by the user directly
    }

    // Helper method to change the state
    public setState(state: State): void {
        this.currentState = state;
    }

    // Releases a gumball
    public releaseBall(): void {
        console.log("A gumball comes rolling out the slot...");
        if (this.count > 0) {
            this.count = this.count - 1;
        }
    }

    // Getters for states and count
    public getCount(): number {
        return this.count;
    }

    public getNoQuarterState(): State {
        return this.noQuarterState;
    }

    public getHasQuarterState(): State {
        return this.hasQuarterState;
    }

    public getSoldState(): State {
        return this.soldState;
    }

    public getSoldOutState(): State {
        return this.soldOutState;
    }

    public getWinnerState(): State {
        return this.winnerState;
    }

    public toString(): string {
        return `\nMighty Gumball, Inc.\nTypeScript-enabled Standing Gumball Model #2022\nInventory: ${this.count} gumballs\nMachine is ${this.currentState.constructor.name}\n`;
    }
}