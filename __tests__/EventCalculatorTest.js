import EventCalculator from '../src/domain/EventCalculator.js';

describe('public method test', () => {
  const eventCalculator = new EventCalculator();

  test('크리스마스 디데이 할인 이벤트 규칙에 맞춰서 할인가격을 반환해주는지', () => {
    const days = [1, 11, 23];
    const discountMoneys = [-1000, -2000, -3200];

    days.forEach((day, index) => {
      const money = EventCalculator.calculateChristmasEventDiscount(day);

      expect(money).toBe(discountMoneys[index]);
    });
  });

  test('평일할인 규칙에 맞춰서 디저트 갯수만큼 할인가격을 반환해주는지', () => {
    const orderMenu = [['제로콜라', '1',], ['초코케이크', '3'], ['양송이수프', '3']];
    const discountMoney = eventCalculator.calculateWeekdayEventDiscount(orderMenu);

    expect((discountMoney)).toBe(-2023 * 3);
    expect((discountMoney)).not.toBe(-2023 * 2);
  });

  test('주말할인 규칙에 맞춰서 메인 갯수만큼 할인가격을 반환해주는지', () => {
    const orderMenu = [['티본스테이크', '2',], ['초코케이크', '3'], ['양송이수프', '3']];
    const discountMoney = eventCalculator.calculateWeekendEventDiscount(orderMenu);

    expect((discountMoney)).toBe(-2023 * 2);
    expect((discountMoney)).not.toBe(-2023 * 1);
  });

  test('특별할인이 -1000원을 할인가격으로 반환하는지', () => {
    const discountMoney = EventCalculator.specialEventDiscount();

    expect(discountMoney).toBe(-1000);
  });

  test('증정품의 가격만큼 할인가격을 반환해주는지', () => {
    const discount = eventCalculator.freeGiftEvent();

    expect(discount).toBe(-25000);
    expect(discount).not.toBe(-1000);
  })
});