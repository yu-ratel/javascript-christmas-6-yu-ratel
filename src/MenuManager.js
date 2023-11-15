import { MENU } from './constants/menu.js';

class MenuManager {
  #menus;

  constructor() {
    this.#menus= Object.values(MENU).flatMap((category) => Object.values(category));
  }

  isMenuAvailable(orderMenu) {
    const availableMenu = this.#menus.map(menu => menu.name);
    
    return orderMenu.every(menu => availableMenu.includes(menu[0]));
  }

  priceForName(name) {
    const { price } = this.#menus.find(menu => menu.name === name);

    return price;
  }

  static getDessert() {
    return Object.values(MENU.DESSERT);
  }

  static getMain() {
    return Object.values(MENU.MAIN);
  }

  static getBeverageNames() {
    return Object.values(MENU.BEVERAGE).map(menu => menu.name);
  }
}

export default MenuManager;
