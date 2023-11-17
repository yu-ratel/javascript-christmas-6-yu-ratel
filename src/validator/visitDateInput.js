import ERROR from '../constants/error.js';
import { DAYS } from '../constants/event.js';

const validateVisitDate= {
  validetor(visitDate) {
    this.visitDateRange(visitDate);
    this.visitDateBlank(visitDate);
  },

  visitDateRange(visitDate) {
    if(!(visitDate >= DAYS.event.start && visitDate <= DAYS.event.end)) {
      throw (ERROR.MESSAGE.invalidDate);
    };
  },

  visitDateBlank(visitDate){
    if(visitDate.trim() !== visitDate) {
      throw (ERROR.MESSAGE.blank);
    }
  }
};

export default validateVisitDate;