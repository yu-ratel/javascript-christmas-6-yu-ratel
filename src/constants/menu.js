const MENU = {
  APPETIZER: {
    mushroomSoup: { name: '양송이수프', price: 6000 },
    tapas: { name: '타파스', price: 5500 },
    caesarSalad: { name: '시저샐러드', price: 8000 },
  },
  MAIN: {
    tBoneSteak: { name: '티본스테이크', price: 55000 },
    bbqRibs: { name: '바비큐립', price: 54000 },
    seafoodPasta: { name: '해산물파스타', price: 35000 },
    christmasPasta: { name: '크리스마스파스타', price: 25000 },
  },
  DESSERT: {
    chocoCake: { name: '초코케이크', price: 15000 },
    iceCream: { name: '아이스크림', price: 5000 },
  },
  BEVERAGE: {
    zeroCola: { name: '제로콜라', price: 3000 },
    redWine: { name: '레드와인', price: 60000 },
    champagne: { name: '샴페인', price: 25000 },
  },
};

const ORDER = {
  initAmount: 0,
  nameIndex: 0,
  countIndex: 1,
  minumumCount: 1,
  maximumCount: 20,
  delimiter: {
    Comma: ',',
    bar: '-',
  },
  freeGiftPrice: 25000,
};

const REGEXP = {
  isNotNumber: /[^0-9]/,

};

export { MENU, ORDER, REGEXP };
