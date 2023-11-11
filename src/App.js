import InputView from './InputView.js';
import OutputView from './OutputView.js';

class App {
  constructor() {
    this.InputView = InputView;
    this.OutputView = OutputView;
  }

  async run() {
    this.OutputView.startMessage();
    await this.#requestEstimatedVisitDate();
  }

  async #requestEstimatedVisitDate() {
    const visitDate = await this.InputView.estimatedVisitDate();
    return visitDate;
  }
}

export default App;
