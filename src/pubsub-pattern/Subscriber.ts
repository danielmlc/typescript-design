import { EventBus } from './EventBus';

export interface Subscriber {
    eventBus: EventBus;
    subscriberName: string;
    subscribe(event: string, callback: Function): void;
    unsubscribe(event: string, callback: Function): void;
}