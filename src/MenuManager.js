import MENU from './constants/menu.js';

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
}

export default MenuManager;
