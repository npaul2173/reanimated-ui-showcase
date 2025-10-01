export const currencyMapByCountryCode = {
  UN: {
    id: 1,
    country: 'United States',
    currency: 'United States Dollar',
    code: 'USD',
    symbol: '$',
  },
  FR: {
    id: 2,
    country: 'France',
    currency: 'Euro',
    code: 'EUR',
    symbol: '€',
  },
  DE: {
    id: 3,
    country: 'Germany',
    currency: 'Euro',
    code: 'EUR',
    symbol: '€',
  },
  GB: {
    id: 4,
    country: 'England',
    currency: 'Pound Sterling',
    code: 'GBP',
    symbol: '£',
  },
  RU: {
    id: 5,
    country: 'Russia',
    currency: 'Russian Ruble',
    code: 'RUB',
    symbol: '₽',
  },
  BR: {
    id: 6,
    country: 'Brazil',
    currency: 'Brazilian Real',
    code: 'BRL',
    symbol: 'R$',
  },
};

export const listCurrencyData = Object.entries(currencyMapByCountryCode).map(
  ([shortCode, data]) => ({
    shortCode,
    ...data,
  }),
);
