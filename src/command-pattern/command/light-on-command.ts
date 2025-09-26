import { Command } from './command';
import { Light } from '../receiver/light';

// LightOnCommand 是一个具体的命令，它实现了 Command 接口。
export class LightOnCommand implements Command {
    private light: Light;

    // 构造函数接收一个 Light 对象（接收者），并将其保存在内部。
    constructor(light: Light) {
        this.light = light;
    }

    // execute 方法会调用接收者（Light 对象）的 on() 方法。
    public execute(): void {
        this.light.on();
    }
}