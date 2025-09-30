import { CurrencyItem } from './CurrencyPicker';

// Define currency codes as a union type
export type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'RUB' | 'BRL';

// Define the exchange rates structure
type ExchangeRates = {
  [from in CurrencyCode]: {
    [to in CurrencyCode]: number;
  };
};

// Exchange rates (you can later replace with live API data)
export const exchangeRates: ExchangeRates = {
  USD: { USD: 1, EUR: 0.94, GBP: 0.82, RUB: 96.5, BRL: 5.1 },
  EUR: { USD: 1.17, EUR: 1, GBP: 0.87, RUB: 97.2, BRL: 5.4 },
  GBP: { USD: 1.22, EUR: 1.15, GBP: 1, RUB: 117.8, BRL: 6.2 },
  RUB: { USD: 0.0104, EUR: 0.0098, GBP: 0.0085, RUB: 1, BRL: 0.052 },
  BRL: { USD: 0.196, EUR: 0.185, GBP: 0.161, RUB: 19.2, BRL: 1 },
};

export function convertCurrencyCountry(
  amount: number,
  from: CurrencyItem,
  to: CurrencyItem,
): string {
  const fromCode = from.code.toUpperCase() as CurrencyCode;
  const toCode = to.code.toUpperCase() as CurrencyCode;

  if (!exchangeRates[fromCode] || !exchangeRates[fromCode][toCode]) {
    throw new Error('Unsupported currency conversion.');
  }

  const rate = exchangeRates[fromCode][toCode];
  const result = amount * rate;
  return result.toFixed(2);
}

// // Example usage
// const amount = 100;
// const from: CurrencyCode = 'USD';
// const to: CurrencyCode = 'EUR';

// const result = convertCurrency(amount, from, to);
// console.log(`${amount} ${from} = ${result.toFixed(2)} ${to}`);
