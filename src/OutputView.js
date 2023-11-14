import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  startMessage() {
    this.print('안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.');
  },

  previewGuide(visitday) {
    this.print(`12월 ${visitday}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`);
  },

  orderMenu(orderMenu) {
    this.print('\n<주문 메뉴>');
    
    orderMenu.forEach((menu) => {
      const [name, count] = menu;

      this.print(`${name} ${count}개`);
    });
  },

  orderAmount(amount) {
    this.print(`\n<할인 전 총주문 금액>
${amount.toLocaleString()}원`);
  },

  freeGift(isgift) {
    this.print('\n<증정 메뉴>');

    if (!isgift) return this.print('없음'); 

    return this.print('샴페인 1개');
  },

  Benefits(eventState, discountAmount) {
    this.print('\n<혜택 내역>');

    if (discountAmount === 0) return this.print('없음');

    return eventState.forEach((state) => {
      const [message, discount] = state;
      if (discount < 0) this.print(`${message}: ${discount.toLocaleString()}원`);
    });
  },

  discountAmount(amount) {
    this.print(`\n<총혜택 금액>
${amount.toLocaleString()}원`);
  },

  discountedTotalAmount(amount) {
    this.print(`\n<할인 후 예상 결제 금액>
${amount.toLocaleString()}원`);
  },

  BadgeEvent(badge) {
    this.print(`\n<12월 이벤트 배지>
${badge}`);
  },

  print(message) {
    Console.print(message);
  },
};

export default OutputView;