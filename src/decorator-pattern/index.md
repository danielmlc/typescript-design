# 装饰器模式 (Decorator Pattern)

## 意图

**装饰器模式**是一种结构型设计模式，它允许你通过将对象放入包含行为的特殊“包装器”中，来为原对象动态地添加新的行为或职责，而无需修改其代码。

这个模式通常被用来在运行时扩展一个对象的功能，是继承的一种灵活替代方案。

## 场景

想象一下你在经营一家咖啡店。最初，你只卖几种基本款咖啡，比如浓缩咖啡 (`Espresso`) 和综合咖啡 (`HouseBlend`)。

后来，顾客希望能往咖啡里加各种调料，比如牛奶 (`Milk`)、奶油 (`Whip`)、摩卡酱 (`Mocha`) 等。每加一种调料，价格都会相应增加。

如果使用继承来解决这个问题，你可能会创建出 `EspressoWithMilk`、`EspressoWithMilkAndWhip`、`EspressoWithMilkAndWhipAndMocha` 等大量的子类，这会导致类的数量爆炸式增长，并且非常难以维护。

装饰器模式优雅地解决了这个问题。你可以将每个调料实现为一个“装饰器”类。当顾客点单时，你从一杯基础咖啡（如 `Espresso`）开始，然后用 `Milk` 装饰器把它包起来，再用 `Whip` 装饰器包起来，最后用 `Mocha` 装饰器包起来。每个装饰器都会给最终的描述和价格添加自己的部分，从而动态地构建出一杯定制咖啡。

## 结构

1.  **组件 (Component)**: (`Beverage` 抽象类)
    *   定义了被装饰的原始对象和装饰器共有的接口。
    ```typescript
    // src/decorator-pattern/Component/Beverage.ts
    export abstract class Beverage {
        protected description: string = 'Unknown Beverage';

        public getDescription(): string {
            return this.description;
        }

        public abstract cost(): number;
    }
    ```

2.  **具体组件 (Concrete Component)**: (`Espresso` 类)
    *   实现了组件接口，是被装饰的原始对象。
    ```typescript
    // src/decorator-pattern/Component/Espresso.ts
    export class Espresso extends Beverage {
        constructor() {
            super();
            this.description = "Espresso";
        }

        public cost(): number {
            return 1.99;
        }
    }
    ```

3.  **装饰器 (Decorator)**: (`CondimentDecorator` 抽象类)
    *   同样实现了组件接口，并持有一个对组件对象的引用（通过 `has-a` 关系）。
    ```typescript
    // src/decorator-pattern/Decorator/CondimentDecorator.ts
    export abstract class CondimentDecorator extends Beverage {
        // This is the object we are decorating
        protected beverage: Beverage;

        // We need to reimplement getDescription() in the decorator
        public abstract getDescription(): string;
    }
    ```

4.  **具体装饰器 (Concrete Decorator)**: (`Milk`, `Whip` 等类)
    *   为组件动态添加了新的行为或状态。它们在调用父类方法（即转发请求）之前或之后，执行自己额外的逻辑。
    ```typescript
    // src/decorator-pattern/Decorator/Milk.ts
    export class Milk extends CondimentDecorator {
        constructor(beverage: Beverage) {
            super();
            this.beverage = beverage;
        }

        public getDescription(): string {
            // Add "Milk" to the description of the beverage we're decorating
            return this.beverage.getDescription() + ', Milk';
        }

        public cost(): number {
            // Add the cost of milk to the cost of the beverage
            return .10 + this.beverage.cost();
        }
    }
    ```
5.  **客户端 (Client)**: (`index.ts`)
    *   客户端代码通过层层包装来动态地构建对象。
    ```typescript
    // src/decorator-pattern/index.ts
    // Start with a plain Espresso
    let espresso: Beverage = new Espresso();

    // Wrap it with Milk
    espresso = new Milk(espresso);

    // Wrap it with Whip
    espresso = new Whip(espresso);

    // Get the final description and cost
    console.log(espresso.getDescription() + ' $' + espresso.cost());
    // Outputs: Espresso, Milk, Whip $2.29
    ```

## 优点

*   **开闭原则**: 你可以在不修改现有对象代码的情况下，为其添加新的功能。
*   **灵活性**: 相比于使用继承来扩展功能，装饰器模式更加灵活。你可以在运行时动态地添加或移除装饰。
*   **避免类爆炸**: 可以通过组合不同的装饰器来获得多种功能组合，避免了创建大量功能各异的子类。
*   **单一职责原则**: 你可以将一个庞大的、拥有多种功能选项的类，拆分成多个功能单一的装饰器。

## 如何运行示例

你可以通过以下命令来运行这个 TypeScript 示例：

```bash
npx ts-node src/decorator-pattern/index.ts
```