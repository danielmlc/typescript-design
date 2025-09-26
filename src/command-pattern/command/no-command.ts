import { Command } from './command';

// NoCommand 是一个空对象，当没有具体命令时使用。
// 这避免了在使用命令前进行 null 检查。
export class NoCommand implements Command {
    public execute(): void {
        // Does nothing.
    }
}