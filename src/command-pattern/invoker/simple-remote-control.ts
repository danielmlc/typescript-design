import { Command } from '../command/command';
import { NoCommand } from '../command/no-command';

// Invoker 类（SimpleRemoteControl）持有一个命令，并在需要时调用它。
export class SimpleRemoteControl {
    private slot: Command;

    constructor() {
        // 在构造时，用一个空命令对象初始化插槽，以避免 null 检查。
        this.slot = new NoCommand();
    }

    // setCommand 方法用于设置遥控器按钮所代表的命令。
    public setCommand(command: Command): void {
        this.slot = command;
    }

    // 当按下按钮时，这个方法会被调用。
    public buttonWasPressed(): void {
        console.log("Remote button pressed...");
        // 调用者只调用 execute 方法，它不知道也不关心接收者是谁或具体操作是什么。
        this.slot.execute();
    }
}