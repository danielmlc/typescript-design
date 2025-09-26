// The Goose class is our adaptee; it has a different interface from Quackable.
export class Goose {
    public honk(): void {
        console.log("Honk");
    }
}