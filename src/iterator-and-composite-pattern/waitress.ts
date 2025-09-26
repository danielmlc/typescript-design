import { MenuComponent } from './component/menu-component';

// The Waitress class is the client that uses the composite menu structure.
export class Waitress {
    private allMenus: MenuComponent;

    constructor(allMenus: MenuComponent) {
        this.allMenus = allMenus;
    }

    // The printMenu method uses the composite's print() method to print the entire hierarchy.
    // The Waitress doesn't need to know whether it's dealing with a leaf or a composite.
    public printMenu(): void {
        this.allMenus.print();
    }
}