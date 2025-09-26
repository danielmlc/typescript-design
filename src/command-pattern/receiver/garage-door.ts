// 另一个 Receiver 类
export class GarageDoor {
    public up(): void {
        console.log("Garage Door is Open");
    }

    public down(): void {
        console.log("Garage Door is Closed");
    }

    public stop(): void {
        console.log("Garage Door is Stopped");
    }

    public lightOn(): void {
        console.log("Garage light is on");
    }

    public lightOff(): void {
        console.log("Garage light is off");
    }
}