import * as React from 'react';
import './style.css';

interface LocaleProps {
  locale: string;
  currency: string;
}
export default function Locale({ locale, currency }: LocaleProps) {
  const dateArr = ['full', 'long', 'medium', 'short'];
  const numArr = [-5, -4.76, 0, 17, 18.05, 122, 1449, 33002];
  return (
    <div>
      <div>
        Date
        <ul>
          {dateArr.map((val) => {
            return (
              <li>
                {val} :{' '}
                {new Intl.DateTimeFormat(locale, { dateStyle: val }).format(
                  new Date()
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        Time
        <ul>
          {dateArr.map((val) => {
            return (
              <li>
                {val} :{' '}
                {new Intl.DateTimeFormat(locale, { timeStyle: val }).format(
                  new Date()
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        Number
        <ul>
          {numArr.map((val) => {
            return (
              <React.Fragment key={val}>
                <li>{new Intl.NumberFormat(locale, {}).format(val)}</li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
      <div>
        Currency Code
        <ul>
          {numArr.map((val) => {
            return (
              <React.Fragment key={val}>
                <li>
                  {' '}
                  {new Intl.NumberFormat(locale, {
                    style: 'currency',
                    currency,
                    currencyDisplay: 'code',
                  }).format(val)}
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
      <div>
        Currency Symbol
        <ul>
          {numArr.map((val) => {
            return (
              <React.Fragment key={val}>
                <li>
                  {' '}
                  {new Intl.NumberFormat(locale, {
                    style: 'currency',
                    currency,
                    currencyDisplay: 'symbol',
                  }).format(val)}
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
      <div>
        Currency Name
        <ul>
          {numArr.map((val) => {
            return (
              <React.Fragment key={val}>
                <li>
                  {' '}
                  {new Intl.NumberFormat(locale, {
                    style: 'currency',
                    currency,
                    currencyDisplay: 'name',
                  }).format(val)}
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
