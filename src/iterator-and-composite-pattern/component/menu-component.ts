import { CustomIterator } from '../iterator/iterator';

// The base Component class declares common operations for both simple and complex objects of a composition.
export abstract class MenuComponent {

    // Methods for managing children. Concrete components will override these.
    public add(menuComponent: MenuComponent): void {
        throw new Error("Unsupported operation");
    }

    public remove(menuComponent: MenuComponent): void {
        throw new Error("Unsupported operation");
    }

    public getChild(i: number): MenuComponent {
        throw new Error("Unsupported operation");
    }

    // "Operation" methods that are specific to the component.
    public getName(): string {
        throw new Error("Unsupported operation");
    }

    public getDescription(): string {
        throw new Error("Unsupported operation");
    }

    public getPrice(): number {
        throw new Error("Unsupported operation");
    }

    public isVegetarian(): boolean {
        throw new Error("Unsupported operation");
    }

    // A common operation for all components.
    public abstract print(): void;

    // An operation to get an iterator.
    public abstract createIterator(): CustomIterator<MenuComponent>;
}