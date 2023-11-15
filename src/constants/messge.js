const REQUSET = {
  visitDate: '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
  orderMenu: '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
};

const MESSAGE = {
  start: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  preview: (visitday) => `12월 ${visitday}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,
  orderMenu: '\n<주문 메뉴>',
  orderMenuFormat: (name, count) => `${name} ${count}개`,
  orderAmount: (amount) => `\n<할인 전 총주문 금액>
${amount.toLocaleString()}원`,
  freeGift: '\n<증정 메뉴>',
  freeGiftGiveaway: '샴페인 1개',
  benefits: '\n<혜택 내역>',
  benefitsFromate: (message, discount) => `${message}: ${discount.toLocaleString()}원`,
  discountAmount: (amount) => `\n<총혜택 금액>
${amount.toLocaleString()}원`,
  discountedAmount: (amount) => `\n<할인 후 예상 결제 금액>
${amount.toLocaleString()}원`,
  badgeEvent: (badge) => `\n<12월 이벤트 배지>
${badge}`,
  none: '없음',
};

export { REQUSET, MESSAGE };
