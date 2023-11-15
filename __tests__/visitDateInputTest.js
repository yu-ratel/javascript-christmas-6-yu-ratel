import validateVisitDate from '../src/validator/visitDateInput.js';

describe('unit test', () => {
  test('1 ~ 31이상의 숫자가 들어오지 않으면 에러를 던지는지', () => {
    const visitDates = [0, 33, 0.1];

    visitDates.forEach((visitDate) => {
      expect(() => {
        validateVisitDate.visitDateRange(visitDate);
      }).toThrow('[ERROR]');
    });
  });

  test('빈칸이 있다면 에러를 던지는지', () => {
    const visitDatas = ['  1', '1  '];

    visitDatas.forEach((visitData) => {
      expect(() => {
        validateVisitDate.visitDateBlank(visitData);
      }).toThrow('[ERROR]');
    });
  });
});
