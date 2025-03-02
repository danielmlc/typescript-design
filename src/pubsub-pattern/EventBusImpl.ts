import { EventBus } from './EventBus';

export class EventBusImpl implements EventBus {
    private subscribers: Map<string, Function[]> = new Map();

    subscribe(event: string, callback: Function): void {
        if (!this.subscribers.has(event)) {
            this.subscribers.set(event, []);
        }
        this.subscribers.get(event).push(callback);
        console.log(`已订阅事件: ${event}`);
    }

    unsubscribe(event: string, callback: Function): void {
        if (!this.subscribers.has(event)) return;
        
        const callbacks = this.subscribers.get(event);
        const index = callbacks.indexOf(callback);
        
        if (index !== -1) {
            callbacks.splice(index, 1);
            console.log(`已取消订阅事件: ${event}`);
        }
        
        // 如果没有订阅者了，清除该事件
        if (callbacks.length === 0) {
            this.subscribers.delete(event);
        }
    }

    publish(event: string, data: any): void {
        if (!this.subscribers.has(event)) return;
        
        this.subscribers.get(event).forEach(callback => {
            callback(data);
        });
        console.log(`已发布事件: ${event}, 数据:`, data);
    }
}