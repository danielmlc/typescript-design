import { EventBus } from './EventBus';

export interface Publisher {
    eventBus: EventBus;
    publishEvent(event: string, data: any): void;
}