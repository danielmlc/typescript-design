import { MenuComponent } from './component/menu-component';
import { Menu } from './component/menu';
import { MenuItem } from './component/menu-item';
import { Waitress } from './waitress';

/**
 * The main client code to run the simulation.
 */
function runMenuSimulation() {
    // Create all the menu components (menus and menu items)
    const pancakeHouseMenu: MenuComponent = new Menu("PANCAKE HOUSE MENU", "Breakfast");
    const dinerMenu: MenuComponent = new Menu("DINER MENU", "Lunch");
    const cafeMenu: MenuComponent = new Menu("CAFE MENU", "Dinner");
    const dessertMenu: MenuComponent = new Menu("DESSERT MENU", "Dessert of course!");

    // Create the top-level menu that will contain all other menus
    const allMenus: MenuComponent = new Menu("ALL MENUS", "All menus combined");

    // Add the main menus to the top-level menu
    allMenus.add(pancakeHouseMenu);
    allMenus.add(dinerMenu);
    allMenus.add(cafeMenu);

    // Add menu items to the Diner Menu
    dinerMenu.add(new MenuItem(
        "Pasta",
        "Spaghetti with Marinara Sauce, and a slice of sourdough bread",
        true,
        3.89
    ));
    // Add the dessert menu to the Diner Menu
    dinerMenu.add(dessertMenu);

    // Add a menu item to the Dessert Menu
    dessertMenu.add(new MenuItem(
        "Apple Pie",
        "Apple pie with a flakey crust, topped with vanilla icecream",
        true,
        1.59
    ));

    // Add a menu item to the pancake house menu
    pancakeHouseMenu.add(new MenuItem(
        "K&B's Pancake Breakfast",
        "Pancakes with scrambled eggs, and toast",
        true,
        2.99
    ));

    // Add a menu item to the cafe menu
    cafeMenu.add(new MenuItem(
        "Veggie Burger and Air Fries",
        "Veggie burger on a whole wheat bun, lettuce, tomato, and fries",
        true,
        3.99
    ));

    // Create a waitress and give her the entire menu hierarchy
    const waitress = new Waitress(allMenus);

    // Ask the waitress to print the menu
    waitress.printMenu();
}

runMenuSimulation();