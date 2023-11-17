import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './constants/messge.js';

const OutputView = {
  startMessage() {
    this.print(MESSAGE.start);
  },

  previewGuide(visitday) {
    this.print(MESSAGE.preview(visitday));
  },

  orderMenu(orderMenu) {
    this.print(MESSAGE.orderMenu);
    
    orderMenu.forEach((menu) => {
      const [name, count] = menu;

      this.print(MESSAGE.orderMenuFormat(name, count));
    });
  },

  orderAmount(amount) {
    this.print(MESSAGE.orderAmount(amount));
  },

  freeGift(isgift) {
    this.print(MESSAGE.freeGift);

    if (!isgift) return this.print(MESSAGE.none); 

    return this.print(MESSAGE.freeGiftGiveaway);
  },

  Benefits(eventState, discountAmount) {
    this.print(MESSAGE.benefits);

    if (discountAmount === 0) return this.print(MESSAGE.none);

    return eventState.forEach((state) => {
      const [message, discount] = state;
      if (discount < 0) this.print(MESSAGE.benefitsFromate(message, discount));
    });
  },

  discountAmount(amount) {
    this.print(MESSAGE.discountAmount(amount));
  },

  discountedTotalAmount(amount) {
    this.print(MESSAGE.discountedAmount(amount));
  },

  BadgeEvent(badge) {
    this.print(MESSAGE.badgeEvent(badge));
  },

  print(message) {
    Console.print(message);
  },
};

export default OutputView;
