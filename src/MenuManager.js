import MENU from './Constants/menu.js';

class MenuManager {
  #menus;

  constructor() {
    this.#menus= Object.values(MENU).flatMap((category) => Object.values(category));
  }

  priceForName(name) {
    const { price } = this.#menus.find(menu => menu.name === name);

    return price;
  }
}

export default MenuManager;