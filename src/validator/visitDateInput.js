import ERROR from '../constants/error.js';

const validateVisitDate = {
  visitDateRange(visitDate) {
    if(!(visitDate >= 1 && visitDate <= 31)) {
      throw (ERROR.MESSAGE.invalidDate);
    };
  }
}

export default validateVisitDate;