import MenuManager from './MenuManager.js';

import ERROR from '../constants/error.js';
import { ORDER, REGEXP } from '../constants/menu.js';
import { MINIMUM_AMOUNT } from '../constants/event.js';
import { FREE_GIFT } from '../constants/event.js';

class OrderManager {
  #orderMenu;

  #totalAmount;

  constructor(orderMenu) {
    this.menuManager = new MenuManager();
    this.#totalAmount = ORDER.initAmount;
    this.#orderMenuParse(orderMenu);
    this.#validate();
  }

  #orderMenuParse(orderMenu) {
    const menus = orderMenu.split(ORDER.delimiter.Comma).map((menu) => menu.split(ORDER.delimiter.bar));

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
    const menuNames = this.#orderMenu.map((menu) => menu[ORDER.nameIndex]);

    if (new Set(menuNames).size !== menuNames.length) {
      throw (ERROR.MESSAGE.invalidOrder);
    }
  }

  #checkMenuCount() {
    const menuCounts = this.#orderMenu.map(meun => meun[ORDER.countIndex]);

    menuCounts.forEach((count) => {
      if (count < ORDER.minumumCount) throw (ERROR.MESSAGE.invalidOrder);
      if (REGEXP.isNotNumber.test(count)) throw (ERROR.MESSAGE.invalidOrder); 
    });
  }

  #checkOnlyBeverage() {
    const beveragMenuNames = this.menuManager.getBeverageNames();
    const isOnlyBeverage = this.#orderMenu.every(menu => beveragMenuNames.includes(menu[ORDER.nameIndex]));

    if(isOnlyBeverage) {
      throw (ERROR.MESSAGE.onlyBeverage);
    }
    
  }

  #checkMaxCount() {
    const orederMenuCount = this.#orderMenu.reduce((acc, cur) => acc + Number(cur[ORDER.countIndex]), 0);

    if (orederMenuCount > ORDER.maximumCount) {
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
    if (this.#totalAmount >= MINIMUM_AMOUNT.freeGiftGiveaway) return this.#totalAmount + (discountAmount + this.menuManager.priceForName(FREE_GIFT.name));

    return this.#totalAmount + discountAmount;
  }

  getOrderMenu() {
    return this.#orderMenu;
  }
}

export default OrderManager;