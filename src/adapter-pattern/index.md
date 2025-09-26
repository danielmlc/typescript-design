# 适配器模式 (Adapter Pattern)

## 意图

**适配器模式**是一种结构型设计模式，它能使接口不兼容的对象能够相互合作。

适配器模式扮演着两个对象之间的中间人角色，它将一个对象的接口转换成客户端预期的另一个接口。这使得原本由于接口不兼容而不能一起工作的类可以协同工作。

## 场景

想象一下，你的应用程序中有一个支付模块，它依赖一个定义好的 `PaymentProcessor` 接口来处理所有支付。目前，你系统中的 `PayPalService` 完美地实现了这个接口。

现在，公司决定要接入一个新的支付渠道：支付宝 (`Alipay`)。问题是，支付宝提供的 SDK（我们称之为 `AlipayService`）有着完全不同的接口。例如，它的支付方法叫 `makePayment`，并且需要的参数也和我们的 `pay` 方法不同。

你不能直接去修改第三方的 `AlipayService` 代码，也不想为了这个新的支付方式而修改你所有依赖 `PaymentProcessor` 接口的现有业务逻辑。

这时，适配器模式就派上用场了。你可以创建一个 `AlipayAdapter`，它：
1.  实现了我们系统所期望的 `PaymentProcessor` 接口。
2.  在内部“包装”了 `AlipayService` 的实例。
3.  在其 `pay` 方法的实现中，将收到的标准请求转换为 `AlipayService` 能够理解的格式，然后调用 `AlipayService` 的 `makePayment` 方法。

这样一来，你的客户端代码就可以像对待 `PayPalService` 一样对待 `AlipayAdapter`，而无需知道背后复杂的转换逻辑。

## structure

1.  **目标 (Target)**: (`PaymentProcessor` 接口)
    *   定义了客户端代码所使用的特定于领域的接口。

2.  **客户端 (Client)**: (`processPayment` 函数)
    *   与实现了 `Target` 接口的对象进行交互。

3.  **被适配者 (Adaptee)**: (`AlipayService` 类)
    *   一个现有的类，其接口与 `Target` 接口不兼容。我们无法修改这个类。

4.  **适配器 (Adapter)**: (`AlipayAdapter` 类)
    *   一个可以同时与 `Target` 和 `Adaptee` 交互的类。它实现了 `Target` 接口，并在内部包装了 `Adaptee` 的一个实例。适配器接收所有 `Target` 接口的调用，并将它们转换为 `Adaptee` 接口的调用。

## 优点

*   **单一职责原则**: 你可以将接口转换的逻辑从主要的业务逻辑中分离出来。
*   **开闭原则**: 你可以在不修改现有客户端代码的情况下，将新的适配器引入程序中，从而支持新的第三方服务。
*   **代码复用**: 可以复用那些接口不兼容的现有类。

## 如何运行示例

你可以通过以下命令来运行这个 TypeScript 示例：

```bash
npx ts-node src/adapter-pattern/index.ts
```