export const calc = ({ buyPrice, sellPrice, count, comission, comissionType }) => {
  if (count === '0' || count === '') {
    return 0;
  }

  const income = (sellPrice * count) - (buyPrice * count);
  const incomeWithoutComission = income - calcComission(income, comission, comissionType);

  return roundResult(incomeWithoutComission);
};

export const calcComission = (income, comission, comissionType) => {
  switch (comissionType) {
    case 'COMISSION_NONE':
      return 0;
    case 'COMISSION_FIXED':
      return roundResult(comission);
    case 'COMISSION_PERCENT':
      return roundResult((comission * income) / 100);
    default:
      return 0;
  }
};

export const getMinimalSellPrice = ({ buyPrice, count, comission, comissionType }) => {
  const comissionCount = calcComission(0, comission, comissionType);
  const sellPrice = (0 + (buyPrice * count) + comissionCount) / count;
  return roundResult(sellPrice);
};

export const roundResult = (result) => Math.round(result * 100) / 100;
