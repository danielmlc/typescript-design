import { Logistics } from './logistics';
import { Transport } from '../transport/transport';
import { Ship } from '../transport/ship';

// SeaLogistics 是 Logistics 的另一个具体子类，它使用 Ship 来完成运输。
export class SeaLogistics extends Logistics {
  // 这个方法实现了工厂方法，返回一个 Ship 实例。
  public createTransport(): Transport {
    return new Ship();
  }
}