import { Console } from '@woowacourse/mission-utils';
import { REQUSET } from './constants/messge.js';

const InputView = {
  estimatedVisitDate() {
    return this.userInputRead(REQUSET.visitDate);
  },

  orderMenu() {
    return this.userInputRead(REQUSET.orderMenu);
  },

  async userInputRead(userInput) {
    const input = await Console.readLineAsync(userInput);
    return input;
  }
};

export default InputView;