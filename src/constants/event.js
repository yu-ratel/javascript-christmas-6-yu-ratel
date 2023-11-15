const DAYS = {
  weekends: [1, 2, 8, 9, 15, 16, 22, 23, 29, 30],
  specialDays: [3, 10, 17, 24, 25, 31],
  christmasEvent: {
    start: 1,
    end: 25,
  }
};

const DISCOUNT_AMOUNT = {
  christmasEvent: {
    base: -900,
    dailyIncrement: -100,
  },
  weekEvent: {
    base: -2023,
  },
  specialEvent: {
    base: -1000,
  }
};

const MINIMUM_AMOUNT = {
  eventAttend: 10000,
  freeGiftGiveaway: 120000,
  badgeGiveaway: {
    santa: 20000,
    tree: 10000,
    star: 5000,
  }
};

const MESSEGE = {
  discount: {
    christmas: '크리스마스 디데이 할인',
    weekend: '주말 할인',
    weekday: '평일 할인',
    special: '특별 할인',
  },
  freeGift: '증정 이벤트',
  badge: {
    santa: '산타',
    tree: '트리',
    star: '별',
    base: '없음',
  },
};


export { DAYS, DISCOUNT_AMOUNT, MINIMUM_AMOUNT, MESSEGE };
