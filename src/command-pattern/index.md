# 命令模式 (Command Pattern)

## 意图

**命令模式**是一种行为设计模式，它能将一个请求封装为一个独立的对象，从而让你能够用不同的请求、队列或日志来参数化客户端，并支持可撤销的操作。

简而言之，命令模式将请求的发起者（调用者）和请求的执行者（接收者）完全解耦。

## 场景

想象一下，你在开发一个智能家居的遥控器应用。这个遥控器上有许多按钮，每个按钮都可以被分配一个不同的功能，比如“打开客厅的灯”、“关闭厨房的灯”或“打开车库门”。

如果遥控器（调用者）的代码直接调用 `LivingRoomLight.on()` 或 `GarageDoor.open()` 这些方法，那么遥控器就会与 `Light` 和 `GarageDoor` 这些具体的类紧密耦合。每当你需要添加一个新的设备（比如一个音响），你就必须去修改遥控器的代码来支持这个新设备，这违反了“开闭原则”。

命令模式通过引入“命令”对象来解决这个问题。我们将每一个请求（如“开灯”）都封装成一个具体的命令类（如 `LightOnCommand`）。这个命令对象持有一个对真正执行操作的对象（“接收者”，如 `Light` 实例）的引用。

遥控器（调用者）只持有一个 `Command` 接口的引用。当一个按钮被按下时，遥控器只管调用这个命令对象的 `execute()` 方法，而完全不需要知道这个命令具体会做什么，也不需要知道接收者是谁。这样一来，我们就可以在不修改遥控器代码的情况下，动态地给按钮分配任何新的命令，实现了完美的解耦。

## 结构

1.  **命令 (Command)**: (`Command` 接口)
    *   通常只声明一个执行方法，如 `execute()`。
    ```typescript
    // src/command-pattern/command/command.ts
    export interface Command {
        execute(): void;
    }
    ```

2.  **接收者 (Receiver)**: (`Light`, `GarageDoor` 类)
    *   包含了真正的业务逻辑。它知道如何实施和执行一个请求，但它并不知道命令的存在。
    ```typescript
    // src/command-pattern/receiver/light.ts
    export class Light {
        public on(): void {
            console.log("Light is On");
        }
        public off(): void {
            console.log("Light is Off");
        }
    }
    ```

3.  **具体命令 (Concrete Command)**: (`LightOnCommand` 等类)
    *   实现了 `Command` 接口，并将一个接收者对象绑定于自身的动作之上。
    *   当 `execute()` 被调用时，它会调用接收者的相应方法。
    ```typescript
    // src/command-pattern/command/light-on-command.ts
    export class LightOnCommand implements Command {
        private light: Light; // A reference to the receiver

        constructor(light: Light) {
            this.light = light;
        }

        public execute(): void {
            this.light.on(); // The command delegates the action to the receiver
        }
    }
    ```

4.  **调用者 (Invoker)**: (`SimpleRemoteControl` 类)
    *   持有一个 `Command` 对象，并让它在需要时执行。调用者不关心命令的具体实现。
    ```typescript
    // src/command-pattern/invoker/simple-remote-control.ts
    export class SimpleRemoteControl {
        private slot: Command;

        public setCommand(command: Command): void {
            this.slot = command;
        }

        public buttonWasPressed(): void {
            this.slot.execute(); // The invoker just calls execute()
        }
    }
    ```

5.  **客户端 (Client)**: (`index.ts`)
    *   负责创建接收者、具体命令，并将命令与接收者关联起来。最后，将配置好的命令对象设置给调用者。
    ```typescript
    // src/command-pattern/index.ts
    const remote = new SimpleRemoteControl();
    const light = new Light("Living Room");
    const lightOn = new LightOnCommand(light);

    remote.setCommand(lightOn);
    remote.buttonWasPressed(); // Outputs: "Living Room light is On"
    ```

## 优点

*   **解耦**: 将请求的调用者和执行者解耦，这是命令模式最主要的优点。
*   **开闭原则**: 你可以轻松地在不修改现有客户端或调用者代码的情况下，引入新的命令。
*   **可组合性**: 你可以组装一系列命令来实现一个宏命令（Macro Command）。
*   **支持撤销/重做**: 命令对象可以添加 `undo()` 方法，从而轻松实现撤销和重做功能。

## 如何运行示例

你可以通过以下命令来运行这个 TypeScript 示例：

```bash
npx ts-node src/command-pattern/index.ts
```