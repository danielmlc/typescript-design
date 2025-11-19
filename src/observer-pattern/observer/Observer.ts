export interface Observer {
    observerName: string;
    update (temp: number, humidity: number, pressure: number): void;
}