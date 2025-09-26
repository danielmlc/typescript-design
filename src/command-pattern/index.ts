import { SimpleRemoteControl } from './invoker/simple-remote-control';
import { Light } from './receiver/light';
import { GarageDoor } from './receiver/garage-door';
import { LightOnCommand } from './command/light-on-command';
import { GarageDoorOpenCommand } from './command/garage-door-open-command';

/**
 * 客户端代码
 */
function runSmartHomeSimulation() {
    // 调用者：遥控器
    const remote = new SimpleRemoteControl();

    // 接收者：各种家电
    const livingRoomLight = new Light("Living Room");
    const garageDoor = new GarageDoor();

    // 命令：将接收者的操作封装成命令对象
    const lightOn = new LightOnCommand(livingRoomLight);
    const garageOpen = new GarageDoorOpenCommand(garageDoor);

    // --- 场景 1: 使用遥控器开灯 ---
    console.log("--- Scenario 1: Turn on the light ---");
    // 将“开灯”命令设置到遥控器按钮上
    remote.setCommand(lightOn);
    // 按下按钮
    remote.buttonWasPressed();

    console.log("\n--- Scenario 2: Use the same remote to open the garage door ---");
    // 现在，将“开车库门”命令设置到同一个按钮上
    remote.setCommand(garageOpen);
    // 再次按下按钮
    remote.buttonWasPressed();
}

runSmartHomeSimulation();