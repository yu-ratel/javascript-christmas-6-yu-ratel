import { Console } from '@woowacourse/mission-utils';

const InputView = {
  estimatedVisitDate() {
    return this.userInputRead('12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n');
  },

  async userInputRead(userInput) {
    const input = await Console.readLineAsync(userInput);
    return input;
  }
};

export default InputView;