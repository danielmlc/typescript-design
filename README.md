### 设计模式

这是一个用 TypeScript 实现的常见设计模式示例库。每个模式都包含一个生动形象的例子和详细的说明文档。

---

### 设计模式目录

#### 创建型模式 (Creational Patterns)
- [x] [工厂方法模式 (Factory Method)](src/factory-method-pattern/index.md)
- [x] [单例模式 (Singleton)](src/singleton-pattern/index.md)

#### 结构型模式 (Structural Patterns)
- [x] [适配器模式 (Adapter)](src/adapter-pattern/index.md)
- [x] [装饰器模式 (Decorator)](src/decorator-pattern/index.md)
- [x] [外观模式 (Facade)](src/facade-pattern/index.md)

#### 行为型模式 (Behavioral Patterns)
- [x] [观察者模式 (Observer)](src/observer-pattern/index.md)
- [x] [策略模式 (Strategy)](src/strategy-pattern/index.md)

---

### 待办清单
- [ ] [命令模式 (Command)]()
- [ ] [模板方法模式 (Template Method)]()
- [ ] [迭代器与组合模式 (Iterator & Composite)]()
- [ ] [状态模式 (State)]()
- [ ] [代理模式 (Proxy)]()
- [ ] [复合模式 (Compound)]()

---

### TypeScript 知识小结

`extends` 关键字 用在类继承中，继承类如果是实体类必须在构造函数中执行super()方法执行父类的构造函数；并且必须实现父类的虚方法。

`implements` 关键字 用在继承接口或者类，继承时必须实现接口或类中定义的变量或方法。