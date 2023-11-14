import EVENT from './constants/event.js';
import EventHelper from './EventHelper.js';

class EventPlanner {
  #visitdate;

  eventState = [];

  #freeGift = false; // 이벤트 도우미 
  
  #discount = 0; // 이벤트 도우미 

  constructor(visitdate, orderMenu, totalAmount) {
    this.#visitdate = visitdate;
    this.#eventApplie(orderMenu, totalAmount);
  }


  #eventApplie(orderMenu, totalAmount) {
    if (totalAmount >= 10000) {
      this.#christmasEventApplie();
      this.#weekEventApplie(orderMenu);
      this.#specialEventApplie();
      this.#isFreeGift(totalAmount);
      this.#freeGiftEventApplie();
    }

    return false;
  }

  #isFreeGift(totalAmount) {
    if (totalAmount >= 120000) {
      this.#freeGift = true;
    }
  }

  #christmasEventApplie() {
    if (this.#visitdate >= 1 && this.#visitdate <= 25) {
      this.eventState.push(['크리스마스 디데이 할인', EventHelper.calculateChristmasEventDiscount(this.#visitdate)]);
    }
  }

  #weekEventApplie(orderMenu) {
    if (EVENT.weekends.includes(Number(this.#visitdate))) {
      return this.eventState.push(['주말 할인', EventHelper.calculateWeekendEventDiscount(orderMenu)]);
    }

    return this.eventState.push(['평일 할인', EventHelper.calculateWeekdayEventDiscount(orderMenu)]);
  }

  #specialEventApplie() {
    if (EVENT.specialDays.includes(Number(this.#visitdate))) {
      this.eventState.push(['특별 할인', EventHelper.specialEventDiscount()]);
    }
  }

  #freeGiftEventApplie() {
    if ((this.#freeGift)) {
      this.eventState.push(['증정 이벤트', EventHelper.freeGiftEvent()]);
    }
  }

  calculateTotalDiscount() {
    this.#discount = this.eventState.reduce((acc, cur) => acc + cur[1], 0);
    const totalDiscount = this.#discount;

    return totalDiscount;
  }

  calculateBadgeEvent() {
    const positiveTotalDiscount = Math.abs(this.#discount) ;

    if (positiveTotalDiscount >= 20000) return '산타';
    if (positiveTotalDiscount >= 10000) return '트리';
    if (positiveTotalDiscount >= 5000) return '별';

    return '없음';
  }

  getIsFreeGift() {
    if (this.#freeGift) return true;

    return false;
  }
}

export default EventPlanner;
