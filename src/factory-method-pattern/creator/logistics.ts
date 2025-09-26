import { Transport } from '../transport/transport';

// Logistics 类声明了工厂方法，它返回一个 Transport 对象。
export abstract class Logistics {
  // 这是一个抽象的工厂方法。子类必须实现它来创建具体的运输工具。
  public abstract createTransport(): Transport;

  /**
   * "planDelivery" 方法不关心具体的运输工具是什么，
   * 它只依赖于 Transport 接口。这使得我们可以随时更改运输方式，
   * 而无需修改这里的业务逻辑。
   */
  public planDelivery(): void {
    // 调用工厂方法来创建一个 Transport 对象。
    const transport = this.createTransport();

    // 现在，使用这个 transport 来执行运输。
    console.log("Planning delivery with the created transport.");
    transport.deliver();
  }
}