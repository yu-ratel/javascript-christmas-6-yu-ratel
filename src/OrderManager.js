import MenuManager from './MenuManager.js';

class OrderManager {
  #orderMenu;

  #totalAmount;

  constructor(orderMenu) {
    this.menuManager = new MenuManager();
    this.#totalAmount = 0;
    this.#orderMenuParse(orderMenu);
  }

  #orderMenuParse(orderMenu) {
    const menus = orderMenu.split(',').map((menu) => menu.split('-'));
    this.#orderMenu = menus;
  }

  calculateTotalOrderAmount() {
    this.#orderMenu.forEach((menu) => {
      const [name, count] = menu;

      this.#totalAmount += this.menuManager.priceForName(name) * count;
    });

    return this.#totalAmount;
  }

  getOrderMenu() {
    return this.#orderMenu;
  }
}

export default OrderManager;