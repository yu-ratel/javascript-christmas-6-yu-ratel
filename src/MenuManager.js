import { MENU, ORDER } from './constants/menu.js';

class MenuManager {
  #menus;

  constructor() {
    this.#menus= MENU;
  }

  #menuArray() {
    return Object.values(this.#menus).flatMap((category) => Object.values(category));
  }

  isMenuAvailable(orderMenu) {
    const availableMenu = this.#menuArray().map(menu => menu.name);
    
    return orderMenu.every(menu => availableMenu.includes(menu[ORDER.nameIndex]));
  }

  priceForName(name) {
    const { price } = this.#menuArray().find(menu => menu.name === name);

    return price;
  }

  getDessert() {
    return Object.values(this.#menus.DESSERT);
  }

  getMain() {
    return Object.values(this.#menus.MAIN);
  }

  getBeverageNames() {
    return Object.values(this.#menus).map(menu => menu.name);
  }
}

export default MenuManager;
