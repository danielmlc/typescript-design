import { MenuComponent } from './menu-component';
import { CustomIterator } from '../iterator/iterator';
import { CompositeIterator } from '../iterator/composite-iterator';

// Menu represents the "Composite" objects in the composition.
// A composite can have children (leaves or other composites).
export class Menu extends MenuComponent {
    private menuComponents: MenuComponent[] = [];
    private name: string;
    private description: string;

    constructor(name: string, description: string) {
        super();
        this.name = name;
        this.description = description;
    }

    public add(menuComponent: MenuComponent): void {
        this.menuComponents.push(menuComponent);
    }

    public remove(menuComponent: MenuComponent): void {
        const index = this.menuComponents.indexOf(menuComponent);
        if (index > -1) {
            this.menuComponents.splice(index, 1);
        }
    }

    public getChild(i: number): MenuComponent {
        return this.menuComponents[i];
    }

    public getName(): string {
        return this.name;
    }

    public getDescription(): string {
        return this.description;
    }

    public print(): void {
        console.log(`\n${this.getName()}, ${this.getDescription()}`);
        console.log("---------------------");

        // Iterate over children and print them
        for (const menuComponent of this.menuComponents) {
            menuComponent.print();
        }
    }

    // For a composite node, we create and return a CompositeIterator.
    public createIterator(): CustomIterator<MenuComponent> {
        return new CompositeIterator(this.menuComponents);
    }
}