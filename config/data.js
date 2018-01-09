export const COMMISSION_NONE = 'COMMISSION_NONE';
export const COMMISSION_FIXED = 'COMMISSION_FIXED';
export const COMMISSION_PERCENT = 'COMMISSION_PERCENT';
export const INTEREST_PERCENT = 'INTEREST_PERCENT';
export const INTEREST_FIXED = 'INTEREST_FIXED';

export const COMMISSIONS = [
  {
    value: COMMISSION_NONE,
    title: 'None',
  }, {
    value: COMMISSION_FIXED,
    title: 'Fixed',
  }, {
    value: COMMISSION_PERCENT,
    title: 'Percent',
  }
];

export const INTERESTS = [
  {
    value: INTEREST_PERCENT,
    title: 'Percent',
  }, {
    value: INTEREST_FIXED,
    title: 'Fixed',
  }
];
