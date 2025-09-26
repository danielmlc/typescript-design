import { PaymentProcessor } from '../target/payment-processor';

// PayPalService 是一个具体的服务类，它与我们的系统接口兼容。
export class PayPalService implements PaymentProcessor {
  public pay(amount: number): void {
    console.log(`Processing payment of $${amount} through PayPal.`);
  }
}