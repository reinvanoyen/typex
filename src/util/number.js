"use strict";

const number = {
  parseFloatMaxDecimal(number, maxDecimalPlaces) {
    return Number(number.toFixed(maxDecimalPlaces).replace(/[.,]00$/, ''));
  }
};

export default number;