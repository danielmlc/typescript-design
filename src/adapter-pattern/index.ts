import { PaymentProcessor } from './target/payment-processor';
import { PayPalService } from './service/paypal-service';
import { AlipayService } from './adaptee/alipay-service';
import { AlipayAdapter } from './adapter/alipay-adapter';

/**
 * 客户端代码。
 *
 * 这个函数只依赖于 PaymentProcessor 接口。它不知道也不关心底层的具体实现是什么。
 * 它可以与我们旧的 PayPalService 协同工作，也可以与通过适配器包装后的新服务协同工作。
 */
function processPayment(processor: PaymentProcessor, amount: number) {
  console.log('Client: Processing a payment...');
  processor.pay(amount);
}

console.log('--- Using the original PayPal service ---');
const payPalService = new PayPalService();
processPayment(payPalService, 150);

console.log('');

console.log('--- Integrating the new Alipay service via Adapter ---');
const alipayService = new AlipayService();
// 我们不能直接将 alipayService 传给 processPayment，因为它们的接口不兼容。
// const WONT_WORK = processPayment(alipayService, 100);

// 所以，我们用 AlipayAdapter 来包装它。
const alipayAdapter = new AlipayAdapter(alipayService);

// 现在，客户端代码就可以通过适配器与 AlipayService 正常交互了。
processPayment(alipayAdapter, 200);