import { EventBusImpl } from './EventBusImpl';
import { NewsPublisher } from './NewsPublisher';
import { NewsSubscriber } from './NewsSubscriber';

// 创建事件总线
const eventBus = new EventBusImpl();

// 创建发布者
const techPublisher = new NewsPublisher(eventBus, '科技新闻发布者');
const sportPublisher = new NewsPublisher(eventBus, '体育新闻发布者');

// 创建订阅者
const subscriber1 = new NewsSubscriber(eventBus, '用户A');
const subscriber2 = new NewsSubscriber(eventBus, '用户B');
const subscriber3 = new NewsSubscriber(eventBus, '用户C');

// 用户订阅不同类别的新闻
subscriber1.subscribeToCategory('tech');
subscriber2.subscribeToCategory('sport');
subscriber3.subscribeToCategory('tech');
subscriber3.subscribeToCategory('sport');

// 发布一些新闻
techPublisher.publishNewsUpdate('tech', '人工智能技术取得重大突破');
sportPublisher.publishNewsUpdate('sport', '某队获得世界杯冠军');

// 用户取消订阅
subscriber1.unsubscribe('news.tech', null);

// 再次发布新闻
techPublisher.publishNewsUpdate('tech', '量子计算研究获新进展');