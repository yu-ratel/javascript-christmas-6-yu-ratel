import EventHelper from './EventHelper.js';

import { DAYS, MINIMUM_AMOUNT, MESSEGE }from './constants/event.js';
import { ORDER } from './constants/menu.js';

class EventPlanner {
  #visitdate;

  eventState = [];

  #freeGift = false; // 이벤트 도우미 
  
  #discount = 0; // 이벤트 도우미 

  constructor(visitdate, orderMenu, totalAmount) {
    this.eventHelper = new EventHelper();
    this.#visitdate = visitdate;
    this.#eventApplie(orderMenu, totalAmount);
  }


  #eventApplie(orderMenu, totalAmount) {
    if (totalAmount >= MINIMUM_AMOUNT.eventAttend) {
      this.#christmasEventApplie();
      this.#weekEventApplie(orderMenu);
      this.#specialEventApplie();
      this.#isFreeGift(totalAmount);
      this.#freeGiftEventApplie();
    }

    return false;
  }

  #isFreeGift(totalAmount) {
    if (totalAmount >= MINIMUM_AMOUNT.freeGiftGiveaway) {
      this.#freeGift = true;
    }
  }

  #christmasEventApplie() {
    if (this.#visitdate >= DAYS.christmasEvent.start && this.#visitdate <= DAYS.christmasEvent.end) {
      this.eventState.push([MESSEGE.discount.christmas, EventHelper.calculateChristmasEventDiscount(this.#visitdate)]);
    }
  }

  #weekEventApplie(orderMenu) {
    if (DAYS.weekends.includes(Number(this.#visitdate))) {
      return this.eventState.push([MESSEGE.discount.weekend, this.eventHelper.calculateWeekendEventDiscount(orderMenu)]);
    }

    return this.eventState.push([MESSEGE.discount.weekday, this.eventHelper.calculateWeekdayEventDiscount(orderMenu)]);
  }

  #specialEventApplie() {
    if (DAYS.specialDays.includes(Number(this.#visitdate))) {
      this.eventState.push([MESSEGE.discount.special, EventHelper.specialEventDiscount()]);
    }
  }

  #freeGiftEventApplie() {
    if ((this.#freeGift)) {
      this.eventState.push([MESSEGE.freeGift, this.eventHelper.freeGiftEvent()]);
    }
  }

  calculateTotalDiscount() {
    this.#discount = this.eventState.reduce((acc, cur) => acc + cur[ORDER.countIndex], 0);
    const totalDiscount = this.#discount;

    return totalDiscount;
  }

  calculateBadgeEvent() {
    const positiveTotalDiscount = Math.abs(this.#discount) ;

    if (positiveTotalDiscount >= MINIMUM_AMOUNT.badgeGiveaway.santa) return MESSEGE.badge.santa;
    if (positiveTotalDiscount >= MINIMUM_AMOUNT.badgeGiveaway.tree) return MESSEGE.badge.tree;
    if (positiveTotalDiscount >= MINIMUM_AMOUNT.badgeGiveaway.star) return MESSEGE.badge.star;

    return MESSEGE.badge.base;
  }

  getIsFreeGift() {
    if (this.#freeGift) return true;

    return false;
  }
}

export default EventPlanner;
