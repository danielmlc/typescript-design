// The State interface defines the methods that all concrete states must implement.
// It also provides a back-reference to the context object (GumballMachine) associated with the state.
export interface State {
    insertQuarter(): void;
    ejectQuarter(): void;
    turnCrank(): void;
    dispense(): void;
}