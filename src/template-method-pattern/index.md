# 模板方法模式 (Template Method Pattern)

## 意图

**模板方法模式**是一种行为设计模式，它在一个方法中定义一个算法的骨架，而将一些步骤的实现延迟到子类中。模板方法使得子类可以在不改变算法结构的情况下，重新定义算法的某些特定步骤。

## 场景

想象一下，你在编写一个制作热饮的应用。无论是泡茶还是冲咖啡，其基本流程（即算法的“模板”）都是非常相似的：
1.  把水烧开。
2.  **用沸水冲泡**（茶叶或咖啡粉）。
3.  把饮料倒进杯子。
4.  **往饮料中加调料**（柠檬或糖和牛奶）。

其中，第 1 步和第 3 步是完全相同的。但第 2 步和第 4 步对于茶和咖啡来说是不同的。

模板方法模式通过创建一个抽象的 `CaffeineBeverage` 基类来解决这个问题。这个基类包含一个 `prepareRecipe()` 方法，这个方法就是“模板方法”，它以正确的顺序调用了上述所有四个步骤。其中，“烧水”和“倒水”被实现为具体的、通用的方法，而“冲泡” (`brew`) 和“加调料” (`addCondiments`) 则被声明为抽象方法，强制子类（如 `Tea` 和 `Coffee`）去提供自己的实现。

## 结构

1.  **抽象类 (Abstract Class)**: (`CaffeineBeverage` 类)
    *   包含一个“模板方法” (`prepareRecipe`)，该方法定义了算法的骨架。它调用了一系列抽象的“原语操作”（如 `brew`）和具体的、通用的操作（如 `boilWater`）。
    ```typescript
    // src/template-method-pattern/caffeine-beverage.ts
    export abstract class CaffeineBeverage {
        // 这是模板方法
        public prepareRecipe(): void {
            this.boilWater();
            this.brew(); // 调用由子类实现的抽象方法
            this.pourInCup();
            this.addCondiments(); // 调用由子类实现的抽象方法
        }

        // 通用方法
        private boilWater(): void {
            console.log("Boiling water");
        }

        private pourInCup(): void {
            console.log("Pouring into cup");
        }

        // “原语”操作，由子类实现
        protected abstract brew(): void;
        protected abstract addCondiments(): void;
    }
    ```

2.  **具体类 (Concrete Class)**: (`Tea`, `Coffee` 类)
    *   继承自抽象类，并实现了父类中定义的抽象原语操作。
    ```typescript
    // src/template-method-pattern/tea.ts
    export class Tea extends CaffeineBeverage {
        // 实现冲泡茶叶的逻辑
        protected brew(): void {
            console.log("Steeping the tea");
        }
        // 实现加柠檬的逻辑
        protected addCondiments(): void {
            console.log("Adding Lemon");
        }
    }
    ```

## 优点

*   **代码复用**: 将算法中不变的部分提取到父类中，避免了代码重复。
*   **开闭原则**: 你可以在不修改现有算法结构的情况下，引入新的子类来实现算法中的可变部分。
*   **控制反转 (Inversion of Control)**: 父类调用子类的操作，而不是相反。这是一种被称为“好莱坞原则”（“不要来找我们，我们会来找你”）的体现。

## 如何运行示例

你可以通过以下命令来运行这个 TypeScript 示例：

```bash
npx ts-node src/template-method-pattern/index.ts
```