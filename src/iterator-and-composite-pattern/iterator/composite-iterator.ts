import { CustomIterator } from './iterator';
import { MenuComponent } from '../component/menu-component';

// CompositeIterator implements the Iterator interface for a composite object (a Menu).
export class CompositeIterator implements CustomIterator<MenuComponent> {
    private items: MenuComponent[];
    private position: number = 0;

    constructor(items: MenuComponent[]) {
        this.items = items;
    }

    public next(): MenuComponent {
        // Get the next item from the list
        const menuComponent = this.items[this.position];
        this.position = this.position + 1;
        return menuComponent;
    }

    public hasNext(): boolean {
        // Check if we've reached the end of the list
        if (this.position >= this.items.length || this.items[this.position] == null) {
            return false;
        } else {
            return true;
        }
    }
}