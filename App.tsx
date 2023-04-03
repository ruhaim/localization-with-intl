import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Locale from './Locale';
import './style.css';

export default function App() {
  const locales = [
    'en-GB',
    'en-US',
    'fr-GB',
    'en-SG',
    'ur',
    'ja',
    'en-AU',
    'zh-sg',
    'vi',
    'hi',
  ];
  const currencies = [
    'SGD',
    'LKR',
    'USD',
    'GBP',
    'EUR',
    'PKR',
    'AUD',
    'INR',
    'VND',
  ];
  const [locale, setLocale] = React.useState(locales[0]);
  const [currency, setCurrency] = React.useState(currencies[0]);
  return (
    <div>
      <div>
        <label>Locale</label>
        <select
          value={locale}
          onChange={(e) => {
            setLocale(e.target.value);
          }}
        >
          {locales.map((v) => (
            <option>{v}</option>
          ))}
        </select>
        <a
          target="_blank"
          href="https://www.science.co.il/language/Locale-codes.php"
        >
          Link
        </a>
      </div>
      <div>
        <label>Currency</label>
        <select
          value={currency}
          onChange={(e) => {
            setCurrency(e.target.value);
          }}
        >
          {currencies.map((v) => (
            <option>{v}</option>
          ))}
        </select>
        <a target="_blank" href="https://www.xe.com/symbols/">
          Link
        </a>
      </div>
      <ErrorBoundary fallback={<div>Invalid locale</div>}>
        <Locale locale={locale} currency={currency} />
      </ErrorBoundary>
    </div>
  );
}
