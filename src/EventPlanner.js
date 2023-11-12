import EVENT from './Constants/event.js';

class EventPlanner {
  #visitday;
  
  #amount;

  constructor(visitday, amount) {
    this.#visitday = visitday;
    this.#amount = amount;
  }

  #isChristmasEventApplied() {
    if (this.#visitday >= 1 && this.#visitday <= 25) return true;
    
    return false;
  }

  #isWeekEventApplied() {
    if (EVENT.weekendDays.inclduse(this.#visitday)) return true;

    return false;
  }

  #isSpecialEventApplied() {
    if (EVENT.specialDays.includes(this.#visitday)) return true;

    return false;
  }

  #freeGiftEventApplied() {
    if (this.#amount >= 120000) return true;

    return false;
  }
}

export default EventPlanner;