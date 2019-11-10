export interface Observer {
    observerName: String;
    update(temp:Number,humidity:Number,pressure:Number);
}