# 外观模式 (Facade Pattern)

## 意图

**外观模式**是一种结构型设计模式，它为一组复杂的子系统（如一个库或框架）提供一个简化的、统一的接口。

外观模式定义了一个更高层次的接口，使得子系统更容易使用。它将客户端的请求代理给相应的子系统对象，从而隐藏了系统的复杂性。

## 场景

想象一下，你需要编写代码来启动一台计算机。这个过程非常复杂，涉及到与多个硬件组件的交互：
1.  CPU 需要被初始化和冻结。
2.  需要从硬盘 (`HardDrive`) 的引导扇区读取数据。
3.  引导数据需要被加载到内存 (`Memory`) 的特定地址。
4.  CPU 需要跳转到该内存地址。
5.  最后，CPU 开始执行指令。

如果让客户端代码直接处理所有这些底层交互，代码会变得非常复杂、混乱，并且与这些底层组件紧密耦合。如果未来任何一个组件的接口发生变化，所有相关的客户端代码都需要修改。

外观模式通过创建一个 `ComputerFacade` 类来解决这个问题。这个类提供一个简单的 `start()` 方法。客户端只需要调用这一个方法，`ComputerFacade` 就会在内部负责协调 `CPU`、`Memory` 和 `HardDrive` 之间的所有复杂交互。客户端代码因此变得非常简洁，并且与底层子系统解耦。

## 结构

1.  **子系统 (Subsystem)**: (`CPU`, `Memory`, `HardDrive` 类)
    *   实现复杂的底层功能，但并不知道外观的存在。
    ```typescript
    // src/facade-pattern/subsystem/cpu.ts
    export class CPU {
      public freeze(): void { /* ... */ }
      public jump(position: number): void { /* ... */ }
      public execute(): void { /* ... */ }
    }
    // ... other subsystem classes like Memory and HardDrive
    ```

2.  **外观 (Facade)**: (`ComputerFacade` 类)
    *   知道哪些子系统负责处理一个请求，并将客户端的请求代理给适当的子系统对象。
    ```typescript
    // src/facade-pattern/facade/computer-facade.ts
    export class ComputerFacade {
      protected cpu: CPU;
      protected memory: Memory;
      protected hardDrive: HardDrive;

      constructor() {
        this.cpu = new CPU();
        this.memory = new Memory();
        this.hardDrive = new HardDrive();
      }

      public start(): void {
        console.log("Computer starting...");
        this.cpu.freeze();
        const bootData = this.hardDrive.read(/* ... */);
        this.memory.load(/* ... */, bootData);
        this.cpu.jump(/* ... */);
        this.cpu.execute();
        console.log("Computer started successfully!");
      }
    }
    ```

3.  **客户端 (Client)**: (`clientCode` 函数)
    *   通过调用 `Facade` 的方法来与子系统进行交互，从而将自己与子系统的复杂性隔离开来。
    ```typescript
    // src/facade-pattern/index.ts
    function clientCode() {
      // 客户端只需要与外观类交互。
      const computer = new ComputerFacade();
      computer.start();
    }
    ```

## 优点

*   **简化接口**: 为复杂的系统提供了一个简单的接口，使得客户端更容易使用。
*   **解耦**: 将客户端代码与底层子系统解耦。子系统的修改不会影响到客户端，只要外观的接口保持不变。
*   **分层**: 帮助构建分层系统。你可以使用外观来定义每层的入口点。

## 如何运行示例

你可以通过以下命令来运行这个 TypeScript 示例：

```bash
npx ts-node src/facade-pattern/index.ts
```