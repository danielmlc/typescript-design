# 复合模式 (Compound Pattern)

## 意图

**复合模式**并不是一个独立的设计模式，而是指在一个解决方案中组合使用多个设计模式。当多个模式协同工作，解决一个通用或复杂的问题时，就形成了一个复合模式。

我们的“鸭子模拟器”是一个经典的复合模式示例，它将多个我们之前学习过的模式融合在了一起，以创建一个灵活、可维护且功能丰富的系统。

## 场景：一个功能强大的鸭子模拟器

我们的目标是创建一个鸭子模拟器，它需要满足以下所有需求：
1.  能模拟各种会叫的实体，不仅仅是鸭子，甚至包括鹅。
2.  能统计所有鸭子（不包括鸭哨等设备）总共叫了多少次。
3.  能够将一群鸭子当作一个独立的单位来管理，比如让整群鸭子一起叫。
4.  能让一个“呱呱叫学家”实时观察到是哪一只鸭子在叫。
5.  对象的创建过程应该被封装起来，不暴露给客户端。

为了实现这个复杂的系统，我们组合了以下模式：

*   **适配器模式 (Adapter)**
    *   **角色**: 我们使用 `GooseAdapter` 将一个具有不兼容接口的 `Goose` 对象（它只会 `honk()`）适配成一个 `Quackable` 对象（它会 `quack()`）。这使得我们的系统可以无缝地处理鹅，就像处理鸭子一样。
    ```typescript
    // src/compound-pattern/adapter/goose-adapter.ts
    export class GooseAdapter implements Quackable {
        private goose: Goose;
        // ...
        public quack(): void {
            // 将 quack() 调用转换为 honk() 调用
            this.goose.honk();
            this.notifyObservers();
        }
    }
    ```

*   **装饰器模式 (Decorator)**
    *   **角色**: 我们使用 `QuackCounter` 装饰器来包装任何 `Quackable` 对象。它在不改变被包装对象代码的情况下，为其增加了“叫声计数”的新功能。
    ```typescript
    // src/compound-pattern/decorator/quack-counter.ts
    export class QuackCounter implements Quackable {
        private duck: Quackable; // 被包装的鸭子
        private static numberOfQuacks: number = 0;

        constructor(duck: Quackable) {
            this.duck = duck;
        }

        public quack(): void {
            this.duck.quack(); // 委托给被包装的鸭子
            QuackCounter.numberOfQuacks++; // 增加新功能
        }
        // ...
    }
    ```

*   **工厂模式 (Factory)**
    *   **角色**: 我们使用 `AbstractDuckFactory` 和 `CountingDuckFactory` 来封装对象的创建过程。客户端通过工厂获取鸭子，而无需关心这些鸭子是否被装饰过。
    ```typescript
    // src/compound-pattern/factory/counting-duck-factory.ts
    export class CountingDuckFactory extends AbstractDuckFactory {
        public createMallardDuck(): Quackable {
            // 工厂负责用装饰器包装对象
            return new QuackCounter(new MallardDuck());
        }
        // ...
    }
    ```

*   **组合模式 (Composite)**
    *   **角色**: 我们使用 `Flock` 类来将一群 `Quackable` 对象组合成一个单一的 `Quackable`。这使得客户端可以像对待一只鸭子一样，对待一整群鸭子。
    ```typescript
    // src/compound-pattern/composite/flock.ts
    export class Flock implements Quackable {
        private quackers: Quackable[] = [];

        public add(quacker: Quackable): void {
            this.quackers.push(quacker);
        }

        public quack(): void {
            // 遍历并委托给每一个子组件
            for (const quacker of this.quackers) {
                quacker.quack();
            }
        }
        // ...
    }
    ```

*   **观察者模式 (Observer)**
    *   **角色**: 我们让所有的 `Quackable` 对象都成为“可被观察的”。一个 `Quackologist`（观察者）可以注册到任何 `Quackable` 对象上。当鸭子叫的时候，它会通知观察者。
    ```typescript
    // src/compound-pattern/duck/mallard-duck.ts
    export class MallardDuck implements Quackable {
        // ...
        public quack(): void {
            console.log("Quack");
            this.notifyObservers(); // 通知观察者
        }
        // ...
    }

    // src/compound-pattern/observer/quackologist.ts
    export class Quackologist implements Observer {
        public update(duck: QuackObservable): void {
            console.log(`Quackologist: ${duck.constructor.name} just quacked.`);
        }
    }
    ```

这些模式共同协作，形成了一个优雅且强大的解决方案。

## 如何运行示例

你可以通过以下命令来运行这个 TypeScript 示例：

```bash
npx ts-node src/compound-pattern/index.ts
```