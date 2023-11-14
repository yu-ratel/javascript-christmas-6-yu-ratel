import EVENT from './Constants/event.js';
import EventHelper from './EventHelper.js';

class EventPlanner {
  #visitday;

  eventState = [];

  #freeGift = false;

  constructor(visitday, orderMenu, totalAmount) {
    this.#visitday = visitday; 
    this.#isChristmasEventApplied();
    this.#isWeekEventApplied(orderMenu);
    this.#isSpecialEventApplied();
    this.#isFreeGift(totalAmount);
    this.#freeGiftEventApplied();
  }

  #isFreeGift(totalAmount) {
    if (totalAmount >= 120000) {
      this.#freeGift = true;
    }
  }

  #isChristmasEventApplied() {
    if (this.#visitday >= 1 && this.#visitday <= 25) {
      this.eventState.push(['크리스마스 디데이 할인', EventHelper.calculateChristmasEventDiscount(this.#visitday)]);
    }
  }

  #isWeekEventApplied(orderMenu) {
    if (EVENT.weekends.includes(Number(this.#visitday))) {
      return this.eventState.push(['주말 할인', EventHelper.calculateWeekendEventDiscount(orderMenu)]);
    }

    return this.eventState.push(['평일 할인', EventHelper.calculateWeekdayEventDiscount(orderMenu)]);
  }

  #isSpecialEventApplied() {
    if (EVENT.specialDays.includes(Number(this.#visitday))) {
      this.eventState.push(['특별 할인', EventHelper.specialEventDiscount()]);
    }
  }

  #freeGiftEventApplied() {
    if ((this.#freeGift)) {
      this.eventState.push(['증정 이벤트', EventHelper.freeGiftEvent()]);
    }
  }

  calculateTotalDiscount() {
    const totalDiscount = this.eventState.reduce((acc, cur) => acc + cur[1], 0);

    return totalDiscount;
  }

  getIsFreeGift() {
    if (this.#freeGift) return true;

    return false;
  }
}

export default EventPlanner;
