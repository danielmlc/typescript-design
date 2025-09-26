# 组合模式 (Composite) 与 迭代器模式 (Iterator)

这两个模式经常被一起使用来处理树状数据结构。

## 组合模式 (Composite Pattern)

### 意图

**组合模式**是一种结构型设计模式，它允许你将对象组合成树状结构，以表示“部分-整体”的层次结构。组合模式使得客户端可以统一地对待单个对象（叶子）和组合对象（容器）。

### 场景

想象一个餐厅的菜单系统。一个菜单（`Menu`）可以包含多个菜单项（`MenuItem`）。同时，一个菜单本身也可以包含其他子菜单（比如，“主菜”菜单下可以有一个“甜点”子菜单）。这就形成了一个典型的树状结构。

我们希望能够用同样的方式处理一个独立的菜单项和一个完整的菜单。例如，我们希望可以调用一个 `print()` 方法，如果它是一个菜单项，就打印出这项的细节；如果它是一个菜单，就打印出菜单的标题，并递归地打印出其下所有的子菜单和菜单项。

组合模式通过创建一个统一的 `MenuComponent` 接口来解决这个问题。`Menu`（组合节点）和 `MenuItem`（叶子节点）都实现了这个接口。这样一来，客户端代码（比如一个 `Waitress` 类）就无需区分它正在处理的是一个简单的叶子还是一个复杂的组合，从而极大地简化了客户端代码。

### 结构

1.  **组件 (Component)**: (`MenuComponent` 抽象类)
    *   为组合中的所有对象（叶子和组合）声明一个统一的接口。
    ```typescript
    // src/iterator-and-composite-pattern/component/menu-component.ts
    export abstract class MenuComponent {
        // ... methods for adding, removing, getting children
        // ... methods for getting name, description, price, etc.
        public abstract print(): void;
        public abstract createIterator(): CustomIterator<MenuComponent>;
    }
    ```

2.  **叶子 (Leaf)**: (`MenuItem` 类)
    *   表示组合中的叶子对象，叶子没有子节点。
    ```typescript
    // src/iterator-and-composite-pattern/component/menu-item.ts
    export class MenuItem extends MenuComponent {
        // ... properties: name, description, etc.
        public print(): void {
            console.log(`  ${this.getName()}...`);
        }
        // Leaf nodes return a NullIterator
        public createIterator(): CustomIterator<MenuComponent> {
            return new NullIterator();
        }
    }
    ```

3.  **组合 (Composite)**: (`Menu` 类)
    *   定义了有子节点的那些组件的行为，并存储子组件。
    ```typescript
    // src/iterator-and-composite-pattern/component/menu.ts
    export class Menu extends MenuComponent {
        private menuComponents: MenuComponent[] = [];
        // ... properties: name, description

        public add(menuComponent: MenuComponent): void {
            this.menuComponents.push(menuComponent);
        }

        public print(): void {
            console.log(`\n${this.getName()}, ${this.getDescription()}`);
            console.log("---------------------");
            // Recursively call print on children
            for (const menuComponent of this.menuComponents) {
                menuComponent.print();
            }
        }

        // Composite nodes return an iterator for their children
        public createIterator(): CustomIterator<MenuComponent> {
            return new CompositeIterator(this.menuComponents);
        }
    }
    ```

4.  **客户端 (Client)**: (`Waitress` 类)
    *   通过组件接口来操纵组合中的对象，无需关心它是叶子还是组合。
    ```typescript
    // src/iterator-and-composite-pattern/waitress.ts
    export class Waitress {
        private allMenus: MenuComponent;

        constructor(allMenus: MenuComponent) {
            this.allMenus = allMenus;
        }

        public printMenu(): void {
            this.allMenus.print(); // Single call prints the entire tree
        }
    }
    ```

## 迭代器模式 (Iterator Pattern)

### 意图

**迭代器模式**是一种行为设计模式，它让你能在一个聚合对象中顺序地遍历元素，而无需暴露其内部表示（如列表、栈、树等）。

### 场景

在我们的菜单系统中，`Menu` 对象内部用一个数组来存储它的子组件。如果我们让 `Waitress` 直接访问这个数组来遍历菜单，那么 `Waitress` 就与 `Menu` 的具体实现紧密耦合了。如果未来 `Menu` 决定换一种数据结构（比如 `Map`）来存储子组件，那么所有相关的客户端代码都需要修改。

迭代器模式通过为 `Menu` 提供一个 `createIterator()` 方法来解决这个问题。这个方法返回一个 `Iterator` 对象。客户端（`Waitress`）只使用这个迭代器来遍历元素（调用 `hasNext()` 和 `next()`），而完全不需要知道 `Menu` 内部是如何存储这些元素的。

### 结构

1.  **迭代器 (Iterator)**: (`CustomIterator` 接口)
    *   定义了遍历元素所需的操作接口（如 `next`, `hasNext`）。
    ```typescript
    // src/iterator-and-composite-pattern/iterator/iterator.ts
    export interface CustomIterator<T> {
        hasNext(): boolean;
        next(): T;
    }
    ```

2.  **具体迭代器 (Concrete Iterator)**: (`CompositeIterator` 类)
    *   实现了迭代器接口，并负责跟踪聚合对象的当前遍历位置。
    ```typescript
    // src/iterator-and-composite-pattern/iterator/composite-iterator.ts
    export class CompositeIterator implements CustomIterator<MenuComponent> {
        private items: MenuComponent[];
        private position: number = 0;
        // ... constructor and methods
    }
    ```

3.  **聚合 (Aggregate)**: (`MenuComponent` 接口)
    *   定义了创建迭代器对象的接口。
    ```typescript
    // src/iterator-and-composite-pattern/component/menu-component.ts
    export abstract class MenuComponent {
        // ...
        public abstract createIterator(): CustomIterator<MenuComponent>;
    }
    ```

4.  **具体聚合 (Concrete Aggregate)**: (`Menu` 类)
    *   实现了聚合接口，并返回一个与其内部数据结构相对应的具体迭代器的实例。
    ```typescript
    // src/iterator-and-composite-pattern/component/menu.ts
    export class Menu extends MenuComponent {
        // ...
        public createIterator(): CustomIterator<MenuComponent> {
            return new CompositeIterator(this.menuComponents);
        }
    }
    ```

## 如何运行示例

你可以通过以下命令来运行这个 TypeScript 示例：

```bash
npx ts-node src/iterator-and-composite-pattern/index.ts
```