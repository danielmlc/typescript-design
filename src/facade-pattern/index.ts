import { ComputerFacade } from './facade/computer-facade';

/**
 * 客户端代码。
 *
 * 客户端代码通过一个简单的接口与复杂的子系统进行交互。
 * ComputerFacade 将客户端与子系统的复杂性隔离开来。
 * 有了外观模式，客户端无需关心启动电脑背后繁琐的细节。
 */
function clientCode() {
  console.log("Client: I want to start the computer.");

  // 客户端只需要与外观类交互。
  const computer = new ComputerFacade();
  computer.start();

  console.log("\nClient: The computer has been started. That was easy!");
}

clientCode();