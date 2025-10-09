import { cryptoLogos } from '../../assets/images/crypto';

// Define colors in a constant
export const appColors = {
  white: '#FFFFFF',
  white001: '#FFFFFF88',
  black: '#000000',
  background: '#1C1C1E',
  text: '#fff',
  pillText: '#E2E2E2',
  base: '#061526',
  baseLighter: '#1C2639',
};

// Create an array of PillMenuItemProps from the cryptoLogos object
export const cryptoItems = [
  { id: '1', image: cryptoLogos.arbitrum, name: 'Arbitrum' },
  { id: '2', image: cryptoLogos.avalancheAvax, name: 'Avalanche' },
  { id: '3', image: cryptoLogos.bitcoinBtc, name: 'Bitcoin' },
  { id: '4', image: cryptoLogos.ethereumEth, name: 'Ethereum' },
  { id: '5', image: cryptoLogos.optimismEthereumOp, name: 'Optimism' },
  { id: '6', image: cryptoLogos.polygonMatic, name: 'Polygon' },
  { id: '7', image: cryptoLogos.shibaInuShib, name: 'Shiba Inu' },
  { id: '8', image: cryptoLogos.toncoinTon, name: 'Toncoin' },
];
