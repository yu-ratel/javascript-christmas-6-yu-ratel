const DAYS = {
  weekends: [1, 2, 8, 9, 15, 16, 22, 23, 29, 30],
  specialDays: [3, 10, 17, 24, 25, 31],
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
}


export { DAYS, DISCOUNT_AMOUNT };
