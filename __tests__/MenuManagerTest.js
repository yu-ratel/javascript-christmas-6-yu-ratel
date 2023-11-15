import MenuManager from '../src/domain/MenuManager.js'

describe('public method test', () => {
  const menu = new MenuManager();

  test('메뉴판에 존재하는 메뉴들이라면 true를 반환해주는지', () => {
    const isMenu = menu.isMenuAvailable([['제로콜라', '1'], ['양송이수프', '1']]);

    expect(isMenu).toBeTruthy();
  });

  test('메뉴판에 존재하지 않는다면 false를 반환해주는지', () => {
    const isMenu = menu.isMenuAvailable([['칼로리폭탄콜라', '1'], ['양갱이수프', '1']]);

    expect(isMenu).toBeFalsy();
  });

  test('메뉴의 이름을 입력하면 그에 따른 가격을 반환해주는지', () => {
    const menuNames = ['제로콜라', '양송이수프', '티본스테이크'];
    const prices = [3000, 6000, 55000];

    menuNames.forEach((name, index) => {
      const menuPrice = menu.priceForName(name);

      expect(menuPrice).toBe(prices[index]);
    });
  });
});
