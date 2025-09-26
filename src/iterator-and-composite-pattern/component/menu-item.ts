import { MenuComponent } from './menu-component';
import { CustomIterator } from '../iterator/iterator';
import { NullIterator } from '../iterator/null-iterator';

// MenuItem represents the "Leaf" objects in the composition.
// A leaf can't have any children.
export class MenuItem extends MenuComponent {
    private name: string;
    private description: string;
    private vegetarian: boolean;
    private price: number;

    constructor(name: string, description: string, vegetarian: boolean, price: number) {
        super();
        this.name = name;
        this.description = description;
        this.vegetarian = vegetarian;
        this.price = price;
    }

    public getName(): string {
        return this.name;
    }

    public getDescription(): string {
        return this.description;
    }

    public getPrice(): number {
        return this.price;
    }

    public isVegetarian(): boolean {
        return this.vegetarian;
    }

    public print(): void {
        console.log(`  ${this.getName()}${this.isVegetarian() ? " (v)" : ""}, ${this.getPrice()}`);
        console.log(`     -- ${this.getDescription()}`);
    }

    // For a leaf node, we return a NullIterator that does nothing.
    public createIterator(): CustomIterator<MenuComponent> {
        return new NullIterator();
    }
}