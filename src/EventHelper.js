import MENU from './Constants/menu.js';

class EventHelper {
  calculateChristmasEventDiscount(visitday) {
    const discountMoney = 900;

    return discountMoney + (100 * visitday);
  }

  calculateWeekdayEventDiscount(orderMenu) {
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

  calculateWeekendEventDiscount(orderMenu) {
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

  specialEventDiscount() {
    return 1000;
  }

  freeGiftEvent() {
    return Object.values(MENU.BEVERAGE.champagne);
  }
}

export default EventHelper;

let a = new EventHelper();

console.log(a.freeGiftEvent());