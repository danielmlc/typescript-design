import { Logistics } from './logistics';
import { Transport } from '../transport/transport';
import { Truck } from '../transport/truck';

// RoadLogistics 是 Logistics 的一个具体子类，它使用 Truck 来完成运输。
export class RoadLogistics extends Logistics {
  // 这个方法实现了工厂方法，返回一个 Truck 实例。
  public createTransport(): Transport {
    return new Truck();
  }
}