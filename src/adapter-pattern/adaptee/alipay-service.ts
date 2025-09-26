// Adaptee 类（AlipayService）是一个外部服务，它的接口与我们的系统不兼容。
export class AlipayService {
  public makePayment(user: string, amountInCents: number): void {
    console.log(`User ${user} is paying ${amountInCents / 100} CNY via Alipay.`);
  }
}