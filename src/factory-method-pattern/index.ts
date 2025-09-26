import { Logistics } from './creator/logistics';
import { RoadLogistics } from './creator/road-logistics';
import { SeaLogistics } from './creator/sea-logistics';

/**
 * 客户端代码。
 *
 * 这里的关键在于，客户端代码（如下的 clientCode 函数）只与抽象的 Logistics 类进行交互。
 * 它不知道（也不关心）具体是哪个子类在工作，以及这个子类是如何创建运输工具的。
 *
 * 我们可以根据当前的配置或环境，选择传入 RoadLogistics 或 SeaLogistics 的实例，
 * 从而在运行时改变程序的行为。
 */
function clientCode(logistics: Logistics) {
  console.log('Client: I am not aware of the creator\'s class, but it still works.');
  logistics.planDelivery();
}

/**
 * 应用程序根据配置或环境来选择创建哪种物流方式。
 */
console.log('App: Launched with the RoadLogistics.');
clientCode(new RoadLogistics());
console.log('');

console.log('App: Launched with the SeaLogistics.');
clientCode(new SeaLogistics());