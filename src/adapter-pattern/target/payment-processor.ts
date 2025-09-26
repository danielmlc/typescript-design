// Target 接口定义了客户端代码所期望的统一接口。
export interface PaymentProcessor {
  pay(amount: number): void;
}