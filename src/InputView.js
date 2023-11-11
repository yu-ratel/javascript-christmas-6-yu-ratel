import { Console } from '@woowacourse/mission-utils';

const InputView = {
  estimatedVisitDate() {
    return this.userInputRead('12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n');
  },

  orderMenu() {
    return this.userInputRead('주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. ');
  },

  async userInputRead(userInput) {
    const input = await Console.readLineAsync(userInput);
    return input;
  }
};

export default InputView;