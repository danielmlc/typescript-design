// Receiver 类（Light）包含了部分业务逻辑。它知道如何执行所有类型的操作来完成一个请求。
export class Light {
    private location: string;

    constructor(location: string) {
        this.location = location;
    }

    public on(): void {
        console.log(`${this.location} light is On`);
    }

    public off(): void {
        console.log(`${this.location} light is Off`);
    }
}