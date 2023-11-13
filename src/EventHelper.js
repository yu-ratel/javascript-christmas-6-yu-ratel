import MENU from './Constants/menu.js';

class EventHelper {
  static calculateChristmasEventDiscount(visitday) {
    const discountMoney = 900;

    return discountMoney + (100 * visitday);
  }

  static calculateWeekdayEventDiscount(orderMenu) {
    const discountMenu = Object.values(MENU.DESSERT);
    let discountMoney = 0;

    orderMenu.forEach((menu) => {
      const [name, count] = menu;
      const discountedMenu = discountMenu.find(dessert => dessert.name === name);
      
      if (discountedMenu) {
        discountMoney += (count * 2023);
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
        discountMoney += (count * 2023);
      }
    });
    return discountMoney;
  }

  static specialEventDiscount() {
    return 1000;
  }

  static freeGiftEvent() {
    return MENU.BEVERAGE.champagne.price;
  }
}

export default EventHelper;
