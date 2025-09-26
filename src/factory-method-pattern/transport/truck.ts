import { Transport } from './transport';

// Truck 类是 Transport 接口的一个具体实现
export class Truck implements Transport {
  public deliver(): void {
    console.log('Delivering by land in a box.');
  }
}