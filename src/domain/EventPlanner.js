import EventCalculator from './EventCalculator.js';

import { DAYS, MINIMUM_AMOUNT, MESSEGE }from '../constants/event.js'
import { ORDER } from '../constants/menu.js';

class EventPlanner {
  #visitdate;

  #eventState = [];

  #freeGift = false;
  
  #discount = 0;

  constructor(visitdate, orderMenu, totalAmount) {
    this.eventCalculator = new EventCalculator();
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
      this.#eventState.push([MESSEGE.discount.christmas, EventCalculator.calculateChristmasEventDiscount(this.#visitdate)]);
    }
  }

  #weekEventApplie(orderMenu) {
    if (DAYS.weekends.includes(Number(this.#visitdate))) {
      return this.#eventState.push([MESSEGE.discount.weekend, this.eventCalculator.calculateWeekendEventDiscount(orderMenu)]);
    }

    return this.#eventState.push([MESSEGE.discount.weekday, this.eventCalculator.calculateWeekdayEventDiscount(orderMenu)]);
  }

  #specialEventApplie() {
    if (DAYS.specialDays.includes(Number(this.#visitdate))) {
      this.#eventState.push([MESSEGE.discount.special, EventCalculator.specialEventDiscount()]);
    }
  }

  #freeGiftEventApplie() {
    if ((this.#freeGift)) {
      this.#eventState.push([MESSEGE.freeGift, this.eventCalculator.freeGiftEvent()]);
    }
  }

  calculateTotalDiscount() {
    this.#discount = this.#eventState.reduce((acc, cur) => acc + cur[ORDER.countIndex], 0);
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

  getEventState() {
    const state = this.#eventState;

    return state;
  }

  getIsFreeGift() {
    if (this.#freeGift) return true;

    return false;
  }
}

export default EventPlanner;
