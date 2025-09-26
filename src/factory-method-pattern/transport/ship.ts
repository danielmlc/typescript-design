import { Transport } from './transport';

// Ship 类是 Transport 接口的另一个具体实现
export class Ship implements Transport {
  public deliver(): void {
    console.log('Delivering by sea in a container.');
  }
}