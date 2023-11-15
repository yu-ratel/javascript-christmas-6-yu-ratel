import InputView from './InputView.js';
import OutputView from './OutputView.js';

import OrderManager from './OrderManager.js';
import EventPlanner from './EventPlanner.js';

import visitDateInput from './validator/visitDateInput.js';

class App {
  constructor() {
    this.InputView = InputView;
    this.OutputView = OutputView;
    this.visitDate = null;
    this.orderMenu = null;
  }

  async run() {
    this.OutputView.startMessage();

    await this.#requestEstimatedVisitDate();
    await this.#requestOrderMenu();

    this.#preview();
    this.#decemberEventResult();
  }

  async #requestEstimatedVisitDate() {
    try {
      const visitDate = await this.InputView.estimatedVisitDate();
      visitDateInput.validetor(visitDate);
      this.visitDate = visitDate;
      return null;
    } catch(error) {
      OutputView.print(error);
      return this.#requestEstimatedVisitDate();
    }
  }
  
  async #requestOrderMenu() {
    try {
      const orderMenu = await this.InputView.orderMenu();
      this.orderMenu = new OrderManager(orderMenu);
      return null;
    } catch(error) {
      OutputView.print(error);
      return this.#requestOrderMenu();
    }
  }

  #preview() {
    OutputView.previewGuide(this.visitDate); 
  }

  #decemberEventResult() {
    OutputView.orderMenu(this.orderMenu.getOrderMenu());

    const orderAmount = this.orderMenu.calculateTotalOrderAmount();
    const event = new EventPlanner(this.visitDate, this.orderMenu.getOrderMenu(), orderAmount);
    const discountAmount = event.calculateTotalDiscount();

    OutputView.orderAmount(orderAmount);
    OutputView.freeGift(event.getIsFreeGift());
    OutputView.Benefits(event.eventState, discountAmount);
    OutputView.discountAmount(discountAmount);
    OutputView.discountedTotalAmount(this.orderMenu.calculateDiscountedTotalAmount(discountAmount));
    OutputView.BadgeEvent(event.calculateBadgeEvent());
  }
}

export default App;
