import { MENU } from './constants/menu.js';
import { DISCOUNT_AMOUNT } from './constants/event.js';

class EventHelper {
  static calculateChristmasEventDiscount(visitday) {
    const discountMoney = DISCOUNT_AMOUNT.christmasEvent.base;

    return discountMoney + (DISCOUNT_AMOUNT.christmasEvent.dailyIncrement * visitday);
  }

  static calculateWeekdayEventDiscount(orderMenu) {
    const discountMenu = Object.values(MENU.DESSERT);
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

  static calculateWeekendEventDiscount(orderMenu) {
    const discountMenu = Object.values(MENU.MAIN);
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

  static freeGiftEvent() {
    return -MENU.BEVERAGE.champagne.price;
  }
}

export default EventHelper;
