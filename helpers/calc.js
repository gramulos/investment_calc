export const calc = ({ buyPrice, sellPrice, count, comission, comissionFixed }) => {
  if (count === '0' || count === '') {
    return 0;
  }

  const income = (sellPrice * count) - (buyPrice * count);
  let result;

  if (comissionFixed) {
    result = income - comission;
  } else {
    result = income - ((comission * income) / 100);
  }

  return Math.round(result * 100) / 100;
};
