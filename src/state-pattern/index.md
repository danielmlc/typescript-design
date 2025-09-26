# 状态模式 (State Pattern)

## 意图

**状态模式**是一种行为设计模式，它允许一个对象在其内部状态改变时改变其行为。该对象看起来就像是改变了它的类。

这个模式的核心思想是，将与特定状态相关的行为局部化，并将不同状态的行为分散到不同的状态对象中。

## 场景

想象一下，你在为一个自动售货机（`GumballMachine`）编写程序。这台机器的行为完全取决于它当前所处的状态：
*   **无硬币状态 (`NoQuarterState`)**: 如果你转动曲柄，什么都不会发生。
*   **有硬币状态 (`HasQuarterState`)**: 如果你转动曲柄，机器会发放糖果。
*   **售罄状态 (`SoldOutState`)**: 如果你投入硬币，机器会立即退还。

如果用一个巨大的 `if/else` 或 `switch` 语句在 `GumballMachine` 类中根据状态变量来控制这些行为，代码会变得极其复杂和难以维护。

状态模式通过为每个可能的状态创建一个独立的类来解决这个问题。每个状态类（如 `NoQuarterState`）都实现了同一个 `State` 接口。`GumballMachine`（我们称之为“上下文”）不再自己实现行为逻辑，而是持有一个对当前状态对象的引用，并将所有与状态相关的请求都**委托**给这个状态对象。当需要转换状态时，一个状态对象会负责将上下文的当前状态设置为下一个状态。

## 结构

1.  **上下文 (Context)**: (`GumballMachine` 类)
    *   定义了客户端感兴趣的接口，并维护一个对当前状态对象的引用。
    *   将所有与状态相关的请求都委托给当前状态对象。
    ```typescript
    // src/state-pattern/context/gumball-machine.ts
    export class GumballMachine {
        private currentState: State;
        // ... other states and count

        constructor(numberGumballs: number) { /* ... */ }

        public insertQuarter(): void {
            this.currentState.insertQuarter(); // 委托
        }

        public turnCrank(): void {
            this.currentState.turnCrank(); // 委托
            this.currentState.dispense(); // 委托
        }

        // 允许状态对象改变上下文的状态
        public setState(state: State): void {
            this.currentState = state;
        }
    }
    ```

2.  **状态 (State)**: (`State` 接口)
    *   定义了一个封装与上下文特定状态相关的行为的接口。
    ```typescript
    // src/state-pattern/state/state.ts
    export interface State {
        insertQuarter(): void;
        ejectQuarter(): void;
        turnCrank(): void;
        dispense(): void;
    }
    ```

3.  **具体状态 (Concrete State)**: (`NoQuarterState` 等类)
    *   实现了状态接口，为特定状态提供了具体的行为实现。
    *   它们还负责在适当的时候，将上下文对象的状态转换到下一个状态。
    ```typescript
    // src/state-pattern/state/no-quarter-state.ts
    export class NoQuarterState implements State {
        private gumballMachine: GumballMachine;

        constructor(gumballMachine: GumballMachine) {
            this.gumballMachine = gumballMachine;
        }

        public insertQuarter(): void {
            console.log("You inserted a quarter");
            // 转换到下一个状态
            this.gumballMachine.setState(this.gumballMachine.getHasQuarterState());
        }

        public turnCrank(): void {
            console.log("You turned, but there's no quarter");
        }
        // ... other methods
    }
    ```

## 优点

*   **单一职责原则**: 将与特定状态相关的代码组织到独立的类中。
*   **开闭原则**: 你可以在不修改现有状态类或上下文代码的情况下，引入新的状态。
*   **简化代码**: 避免了在上下文中出现庞大、复杂的条件语句。

## 如何运行示例

你可以通过以下命令来运行这个 TypeScript 示例：

```bash
npx ts-node src/state-pattern/index.ts
```