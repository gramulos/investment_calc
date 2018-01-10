import * as types from '../config/data';

const tryParse = (value) => {
  const parsedValue = parseFloat(value);
  if (Number.isNaN(parsedValue)) {
    return 0;
  }
  return parsedValue;
};

const calcComission = (amount, commission, commissionType) => {
  switch (commissionType) {
    case types.COMMISSION_FIXED:
      return commission;
    case types.COMMISSION_PERCENT:
      return (commission * amount) / 100;
    default:
      return 0;
  }
};

const getSellPriceByInterest = (buyPrice, count, commission, commissionType, interest, interestType) => {
  let sellPrice = 0;

  if (interestType === types.INTEREST_FIXED && commissionType !== types.COMMISSION_PERCENT) {
    sellPrice = (interest + (commission * 2) + (buyPrice * count)) / count;
  } else if (interestType === types.INTEREST_PERCENT && commissionType !== types.COMMISSION_PERCENT) {
    sellPrice = (((buyPrice * count) * (1 + (interest / 100))) + (commission * 2)) / count;
  } else if (interestType === types.INTEREST_PERCENT && commissionType === types.COMMISSION_PERCENT) {
    sellPrice = (((buyPrice * count) * (1 + (interest / 100))) + (buyPrice * count * (commission / 100))) / (count - (count * (commission / 100)));
  } else if (interestType === types.INTEREST_FIXED && commissionType === types.COMMISSION_PERCENT) {
    sellPrice = ((buyPrice * count) + interest + (buyPrice * count * (commission / 100))) / (count - (count * (commission / 100)));
  }

  return sellPrice;
};

const getInterestBySellPrice = (buyPrice, count, commission, commissionType, sellPrice, interestType) => {
  let interest = 0;

  if (interestType === types.INTEREST_FIXED && commissionType !== types.COMMISSION_PERCENT) {
    interest = (sellPrice * count) - (commission * 2) - (buyPrice * count);
  } else if (interestType === types.INTEREST_PERCENT && commissionType !== types.COMMISSION_PERCENT) {
    interest = ((((sellPrice * count) - (commission * 2)) / (buyPrice * count)) - 1) * 100;
  } else if (interestType === types.INTEREST_PERCENT && commissionType === types.COMMISSION_PERCENT) {
    interest = ((((sellPrice * (count - (count * (commission / 100)))) - (buyPrice * count * (commission / 100))) / (buyPrice * count)) - 1) * 100;
  } else if (interestType === types.INTEREST_FIXED && commissionType === types.COMMISSION_PERCENT) {
    interest = (sellPrice * (count - (count * (commission / 100)))) - (buyPrice * count) - (buyPrice * count * (commission / 100));
  }

  return interest;
};

export default (props) => {
  const buyPrice = tryParse(props.buyPrice);
  const count = tryParse(props.count);
  const commission = tryParse(props.commission);
  const commissionType = props.commissionType;
  const interestType = props.interestType;
  const interest = props.selector !== 'sellPrice' ? tryParse(props.interest) : getInterestBySellPrice(buyPrice, count, commission, commissionType, tryParse(props.sellPrice), interestType);
  const sellPrice = props.selector === 'sellPrice' ? tryParse(props.sellPrice) : getSellPriceByInterest(buyPrice, count, commission, commissionType, interest, interestType);

  const achievements = sellPrice * count;
  const investments = buyPrice * count;

  const depositCommission = calcComission(investments, commission, commissionType);
  const withdrawCommission = calcComission(achievements, commission, commissionType);
  const totalCommission = depositCommission + withdrawCommission;

  const income = achievements - investments - totalCommission;
  const redLine = getSellPriceByInterest(buyPrice, count, commission, commissionType, 0, types.INTEREST_FIXED);

  return {
    buyPrice: props.selector === 'buyPrice' ? props.buyPrice : buyPrice.toFixed(2),
    sellPrice: props.selector === 'sellPrice' ? props.sellPrice : sellPrice.toFixed(2),
    count: props.selector === 'count' ? props.count : count.toString(),
    commission: commission.toString(),
    commissionType,
    interest: props.selector === 'interest' ? props.interest : interest.toFixed(2),
    interestType,
    investments: investments.toFixed(2),
    achievements: achievements.toFixed(2),
    income: income.toFixed(2),
    depositCommission: depositCommission.toFixed(2),
    withdrawCommission: withdrawCommission.toFixed(2),
    totalCommission: totalCommission.toFixed(2),
    redLine: redLine.toFixed(2),
  };
};
