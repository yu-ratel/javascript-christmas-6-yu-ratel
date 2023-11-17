import OrderManager from '../src/domain/OrderManager.js';

describe('public method test', () => {
  const orderMenu = '양송이수프-1,티본스테이크-1,제로콜라-2';
  const order = new OrderManager(orderMenu);

  test('주어진 메뉴와 개수에 따른 합산값을 반환하는지', () => {
    const amount = order.calculateTotalOrderAmount();

    expect(amount).toBe(67000);
  });

  test('12만원이 넘어가지않으면 할인금액을 빼서 반환하는지', () => {
    const amount = order.calculateDiscountedTotalAmount(-3000);

    expect(amount).toBe(64000);
    expect(amount).not.toBe(64001);
  });

  test('올바르게 정제된 orderMenu를 반환하는지', () => {
    const menu = order.getOrderMenu();

    expect(menu).toEqual([['양송이수프', '1'],['티본스테이크', '1'], ['제로콜라', '2']]);
  })
});

describe('constructor validate' , () => {
  test('메뉴판에 없는 메뉴가 입력값으로 들어오면 에러를 던지는지', () => {
    expect(() => {
      new OrderManager('양송이수프-1,양송이소프-2,제로콜라-4');
    }).toThrow('[ERROR]');
  });

  test('주문메뉴에 중복메뉴가 있으면 에러를 던지는지', () => {
    expect(() => {
      new OrderManager('제로콜라-2,제로콜라-1');
    }).toThrow('[ERROR]');
  });

  test('주문 메뉴 갯수가 1보다 작으면 에러를 던지는지', () => {
    expect(() => {
      new OrderManager('제로콜라-0,티본스테이크-1');
    }).toThrow('[ERROR]');
  });

  test('주문 메뉴 갯수가 숫자가 아니라면 에러를 던지는지', () => {
    expect(() => {
      new OrderManager('제로콜라-ㅁ,티본스테이크-1');
    }).toThrow('[ERROR]');
  });

  test('주문 메뉴 갯수가 20개를 넘어가면 에러를 던지는지', () => {
    expect(() => {
      new OrderManager('제로콜라-15,양송이수프-22');
    }).toThrow('[ERROR]');
  });

  test('형식에 어긋나다면 에러를 던지는지', () => {
    expect(() => {
      new OrderManager('1-제로콜라,3,ㄴㄴ');
    }).toThrow('[ERROR]');
  });
});
