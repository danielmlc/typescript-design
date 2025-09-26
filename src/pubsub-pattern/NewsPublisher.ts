import { Publisher } from './Publisher';
import { EventBus } from './EventBus';

export class NewsPublisher implements Publisher {
    public eventBus: EventBus;
    private name: string;

    constructor(eventBus: EventBus, name: string) {
        this.eventBus = eventBus;
        this.name = name;
    }

    publishEvent(event: string, data: any): void {
        console.log(`${this.name} 正在发布事件: ${event}`);
        this.eventBus.publish(event, data);
    }

    publishNewsUpdate(category: string, title: string): void {
        const newsData = {
            category,
            title,
            timestamp: new Date().toISOString()
        };
        this.publishEvent(`news.${category}`, newsData);
    }
}