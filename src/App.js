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
    await this.#requestResult();
  }

  async #requestEstimatedVisitDate() {
    try {
      const visitDate = await this.InputView.estimatedVisitDate();
      visitDateInput.visitDateRange(visitDate);
      this.visitDate = visitDate;
      return null;
    } catch(error) {
      OutputView.print(error);
      return this.#requestEstimatedVisitDate();
    }
  }
  
  async #requestOrderMenu() {
    const orderMenu = await this.InputView.orderMenu();
    this.orderMenu = new OrderManager(orderMenu);
    
  }

  async #requestResult() {
    OutputView.previewGuide(this.visitDate); 
    OutputView.orderMenu(this.orderMenu.getOrderMenu());
    const orderAmount = this.orderMenu.calculateTotalOrderAmount();
    OutputView.orderAmount(orderAmount);

    const event = new EventPlanner(this.visitDate, this.orderMenu.getOrderMenu(), orderAmount);
    OutputView.freeGift(event.getIsFreeGift());

    const discountAmount = event.calculateTotalDiscount();

    OutputView.Benefits(event.eventState, discountAmount);
    OutputView.discountAmount(discountAmount);
    OutputView.discountedTotalAmount(this.orderMenu.calculateDiscountedTotalAmount(discountAmount));
    OutputView.BadgeEvent(event.calculateBadgeEvent());
  }
}

export default App;
