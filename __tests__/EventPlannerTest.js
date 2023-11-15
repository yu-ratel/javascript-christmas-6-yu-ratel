import EventPlanner from '../src/domain/EventPlanner.js';

const eventPlanner = new EventPlanner(3, [['해산물파스타','2'], ['레드와인', '1']], 130000);

describe('acceptance test', () => {
  test('총 할인금액을 알맞게 반환하는지', () => {
    const discountMoney = eventPlanner.calculateTotalDiscount();

    expect(discountMoney).toBe(-27200);
    expect(discountMoney).not.toBe(-27210);
  });

  test('올바른 할인 내역 결과가 나오는지 ', () => {
    const eventState = eventPlanner.getEventState();
    const result = [['크리스마스 디데이 할인', -1200], ['평일 할인', 0], ['특별 할인', -1000], ['증정 이벤트', -25000]];
    
    expect(eventState).toEqual(result);
  });
});

