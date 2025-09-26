export interface EventBus {
    subscribe(event: string, callback: Function): void;
    unsubscribe(event: string, callback: Function): void;
    publish(event: string, data: any): void;
}