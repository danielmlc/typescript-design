import { PaymentProcessor } from '../target/payment-processor';
import { AlipayService } from '../adaptee/alipay-service';

// Adapter 类通过实现 Target 接口，将 Adaptee 的接口转换为客户端期望的接口。
export class AlipayAdapter implements PaymentProcessor {
  private readonly alipayService: AlipayService;

  constructor(alipayService: AlipayService) {
    this.alipayService = alipayService;
  }

  /**
   * pay 方法是适配器模式的关键所在。
   * 它接收我们系统标准格式的调用，然后在内部将其转换为
   * AlipayService 所期望的格式。
   *
   * @param amount - 金额（以美元为单位）
   */
  public pay(amount: number): void {
    // 1. 假设我们需要一个用户ID。在真实应用中，这可能会从会话或某处获取。
    const currentUser = 'user_123';

    // 2. 将金额从美元转换为分。
    const amountInCents = amount * 100;

    // 3. 调用被适配者（AlipayService）的方法。
    console.log("Adapter is translating the payment request for Alipay...");
    this.alipayService.makePayment(currentUser, amountInCents);
  }
}