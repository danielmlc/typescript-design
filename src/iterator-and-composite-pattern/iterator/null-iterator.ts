import { CustomIterator } from './iterator';
import { MenuComponent } from '../component/menu-component';

// NullIterator is a specific type of iterator that does nothing and represents an empty collection.
export class NullIterator implements CustomIterator<MenuComponent> {

    /**
     * Calling next() on a null iterator is a logical error, as hasNext() is always false.
     * We throw an error to indicate this illegal state.
     */
    public next(): MenuComponent {
        throw new Error("No such element in NullIterator.");
    }

    /**
     * A null iterator never has a next element.
     */
    public hasNext(): boolean {
        return false;
    }
}