# 策略模式 (Strategy Pattern)

## 意图

**策略模式**是一种行为设计模式，它定义了一系列算法，将每一个算法封装起来，并使它们可以相互替换。策略模式让算法的变化独立于使用算法的客户端。

简而言之，它允许你在运行时，根据不同的情况，选择一个对象应该如何执行某个特定的行为。

## 场景

想象一下，你在设计一个鸭子模拟游戏。游戏里有各种各样的鸭子，比如绿头鸭 (`MallardDuck`)。它们的飞行 (`fly`) 和呱呱叫 (`quack`) 行为却各不相同。

如果使用继承来实现，每当行为发生变化时，都可能需要创建新的子类，这会导致代码僵化且难以维护。

策略模式通过将这些行为从 `Duck` 类中抽离出来，封装成独立的“行为”对象（策略），来完美地解决这个问题。我们创建 `FlyBehavior` 和 `QuackBehavior` 两个接口，以及一系列实现了这些接口的具体策略类（如 `FlyWithWings`, `FlyNoWay`）。

`Duck` 类不再自己实现这些行为，而是持有两个指向行为对象的引用。当需要执行飞行或呱呱叫时，它只是简单地将任务“委托”给相应的行为对象。这样一来，我们就可以通过在构造时传入不同的行为对象，或者在运行时调用 `set` 方法，来轻松地改变任何一只鸭子的行为。

## 结构

1.  **策略 (Strategy)**: (`FlyBehavior` 接口)
    *   定义了所有支持的算法的通用接口。
    ```typescript
    // src/strategy-pattern/FlyBehavior/FlyBehavior.ts
    export interface FlyBehavior {
       fly(): void;
    }
    ```

2.  **具体策略 (Concrete Strategy)**: (`FlyWithWings` 类)
    *   实现了策略接口，封装了具体的算法或行为。
    ```typescript
    // src/strategy-pattern/FlyBehavior/FlyWithWings.ts
    export class FlyWithWings implements FlyBehavior {
        public fly(): void {
            console.log("I'm flying!");
        }
    }
    ```

3.  **上下文 (Context)**: (`Duck` 抽象类)
    *   持有一个对策略对象的引用。
    *   它不直接执行行为，而是将工作委托给链接的策略对象。
    *   它提供一个 `set` 方法，允许客户端在运行时替换策略。
    ```typescript
    // src/strategy-pattern/Duck.ts
    export abstract class Duck {
        protected quackBehavior: QuackBehavior;
        protected flyBehavior: FlyBehavior;

        constructor(quackBehavior: QuackBehavior, flyBehavior: FlyBehavior) {
            this.quackBehavior = quackBehavior;
            this.flyBehavior = flyBehavior;
        }

        // 将飞行行为委托给策略对象
        public performFly(): void {
            this.flyBehavior.fly();
        }

        // 在运行时改变飞行行为
        public setFlyBehavior(fb: FlyBehavior): void {
            this.flyBehavior = fb;
        }
        // ... a similar structure for quack behavior
    }
    ```

## 优点

*   **开闭原则**: 你可以在不修改现有上下文或策略代码的情况下，轻松地引入新的策略。
*   **代码复用**: 你可以避免在多个上下文类中重复相同的逻辑，而是将它封装在一个策略中。
*   **松耦合**: 将算法的定义与使用它的上下文分离开来，降低了它们之间的耦合。
*   **运行时灵活性**: 可以轻松地在运行时切换算法（策略）。

## 如何运行示例

你可以通过以下命令来运行这个 TypeScript 示例：

```bash
npx ts-node src/strategy-pattern/index.ts
```