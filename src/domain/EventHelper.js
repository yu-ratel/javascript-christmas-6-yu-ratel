import MenuManager from './MenuManager.js';

import { FREE_GIFT } from '../constants/event.js'
import { DISCOUNT_AMOUNT } from '../constants/event.js';

class EventHelper {
  constructor() {
    this.menuManager = new MenuManager();
  }

  static calculateChristmasEventDiscount(visitday) {
    const discountMoney = DISCOUNT_AMOUNT.christmasEvent.base;

    return discountMoney + (DISCOUNT_AMOUNT.christmasEvent.dailyIncrement * visitday);
  }

  calculateWeekdayEventDiscount(orderMenu) {
    const discountMenu = this.menuManager.getDessert();
    let discountMoney = 0;

    orderMenu.forEach((menu) => {
      const [name, count] = menu;
      const discountedMenu = discountMenu.find(dessert => dessert.name === name);
      
      if (discountedMenu) {
        discountMoney += (count * DISCOUNT_AMOUNT.weekEvent.base);
      }
    });

    return discountMoney;
  }

  calculateWeekendEventDiscount(orderMenu) {
    const discountMenu = this.menuManager.getMain();
    let discountMoney = 0;

    orderMenu.forEach((menu) => {
      const [name, count] = menu;
      const discountedMenu = discountMenu.find(main => main.name === name);
      
      if (discountedMenu) {
        discountMoney += (count * DISCOUNT_AMOUNT.weekEvent.base);
      }
    });
    return discountMoney;
  }

  static specialEventDiscount() {
    return DISCOUNT_AMOUNT.specialEvent.base;
  }

  freeGiftEvent() {
    return -this.menuManager.priceForName(FREE_GIFT.name);
  }
}

export default EventHelper;