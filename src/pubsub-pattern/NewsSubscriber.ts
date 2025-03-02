import { Subscriber } from './Subscriber';
import { EventBus } from './EventBus';

export class NewsSubscriber implements Subscriber {
    public eventBus: EventBus;
    public subscriberName: string;
    private callbacks: Map<string, Function> = new Map();

    constructor(eventBus: EventBus, name: string) {
        this.eventBus = eventBus;
        this.subscriberName = name;
    }

    subscribe(event: string, callback: Function): void {
        this.callbacks.set(event, callback);
        this.eventBus.subscribe(event, callback);
        console.log(`${this.subscriberName} 订阅了事件: ${event}`);
    }

    unsubscribe(event: string, callback: Function): void {
        if (!this.callbacks.has(event)) return;
        
        this.eventBus.unsubscribe(event, this.callbacks.get(event));
        this.callbacks.delete(event);
        console.log(`${this.subscriberName} 取消订阅了事件: ${event}`);
    }

    subscribeToCategory(category: string): void {
        const eventName = `news.${category}`;
        const callback = (data: any) => {
            console.log(`${this.subscriberName} 收到 ${category} 新闻: ${data.title}`);
        };
        this.subscribe(eventName, callback);
    }
}