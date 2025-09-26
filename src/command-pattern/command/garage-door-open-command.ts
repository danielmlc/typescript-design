import { Command } from './command';
import { GarageDoor } from '../receiver/garage-door';

// GarageDoorOpenCommand 是一个具体的命令。
export class GarageDoorOpenCommand implements Command {
    private garageDoor: GarageDoor;

    constructor(garageDoor: GarageDoor) {
        this.garageDoor = garageDoor;
    }

    public execute(): void {
        this.garageDoor.up();
    }
}