import { Command } from './command';
import { GarageDoor } from '../receiver/garage-door';

// GarageDoorCloseCommand 是一个具体的命令。
export class GarageDoorCloseCommand implements Command {
    private garageDoor: GarageDoor;

    constructor(garageDoor: GarageDoor) {
        this.garageDoor = garageDoor;
    }

    public execute(): void {
        this.garageDoor.down();
    }
}