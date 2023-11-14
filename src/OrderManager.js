import MenuManager from './MenuManager.js';
import ERROR from './constants/error.js';

class OrderManager {
  #orderMenu;

  #totalAmount;

  constructor(orderMenu) {
    this.menuManager = new MenuManager();
    this.#totalAmount = 0;
    this.#orderMenuParse(orderMenu);
    this.#validate();
  }

  #orderMenuParse(orderMenu) {
    const menus = orderMenu.split(',').map((menu) => menu.split('-'));

    this.#orderMenu = menus;
  }

  #validate() {
    this.#checkAvailableMenu();
    this.#checkDuplicationMenu();
    this.#checkMenuCount();
    this.#checkOnlyBeverage();
    this.#checkMaxCount();
  }

  #checkAvailableMenu() {
    if(!this.menuManager.isMenuAvailable(this.#orderMenu)) {
      throw (ERROR.MESSAGE.invalidOrder);
    }
  }

  #checkDuplicationMenu() {
    const menuNames = this.#orderMenu.map((menu) => menu[0]);

    if (new Set(menuNames).size !== menuNames.length) {
      throw (ERROR.MESSAGE.invalidOrder);
    }
  }

  #checkMenuCount() {
    const menuCounts = this.#orderMenu.map(meun => meun[1]);

    menuCounts.forEach((count) => {
      if (count < 1) throw (ERROR.MESSAGE.invalidOrder);
      if (/[^0-9]/.test(count)) throw (ERROR.MESSAGE.invalidOrder); 
    });
  }

  #checkOnlyBeverage() {
    const beveragMenuNames = MenuManager.getBeverageNames();
    const isOnlyBeverage = this.#orderMenu.every(menu => beveragMenuNames.includes(menu[0]));

    if(isOnlyBeverage) {
      throw (ERROR.MESSAGE.onlyBeverage);
    }
    
  }

  #checkMaxCount() {
    const orederMenuCount = this.#orderMenu.reduce((acc, cur) => acc + Number(cur[1]), 0);

    if (orederMenuCount > 20) {
      throw (ERROR.MESSAGE.maxCount);
    }
  }

  calculateTotalOrderAmount() {
    this.#orderMenu.forEach((menu) => {
      const [name, count] = menu;

      this.#totalAmount += this.menuManager.priceForName(name) * count;
    });

    return this.#totalAmount;
  }

  calculateDiscountedTotalAmount(discountAmount) {
    if (this.#totalAmount >= 120000) return this.#totalAmount + (discountAmount + 25000);

    return this.#totalAmount + discountAmount;
  }

  getOrderMenu() {
    return this.#orderMenu;
  }
}

export default OrderManager;