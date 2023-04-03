import * as React from 'react';
import './style.css';

interface LocaleProps {
  locale: string;
  currency: string;
}
export default function Locale({ locale, currency }: LocaleProps) {
  const dateArr = ['full', 'long', 'medium', 'short'];
  const numArr = [-5, -4.76, 0, 4.06, 4.664, 4.6, 17, 18.05, 122, 1449, 33002];
  return (
    <div>
      <div style={{ display: 'flex' }}>
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
      </div>
      <div style={{ display: 'flex' }}>
        <div>
          Number (Long)
          <ul>
            {numArr.map((val) => {
              return (
                <React.Fragment key={val}>
                  <li>
                    {new Intl.NumberFormat(locale, {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2,
                    }).format(val)}
                  </li>
                </React.Fragment>
              );
            })}
          </ul>
        </div>
        <div>
          Number (Short)
          <ul>
            {numArr.map((val) => {
              return (
                <React.Fragment key={val}>
                  <li>
                    {new Intl.NumberFormat(locale, {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 0,
                    }).format(val)}
                  </li>
                </React.Fragment>
              );
            })}
          </ul>
        </div>
      </div>

      <div style={{ display: 'flex' }}>
        <div>
          Currency (Long)
          <ul>
            {numArr.map((val) => {
              return (
                <React.Fragment key={val}>
                  <li>
                    {new Intl.NumberFormat(locale, {
                      style: 'currency',
                      currency,
                      currencyDisplay: 'code',
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2,
                    }).format(val)}
                  </li>
                </React.Fragment>
              );
            })}
          </ul>
        </div>
        <div>
          Currency (Short)
          <ul>
            {numArr.map((val) => {
              return (
                <React.Fragment key={val}>
                  <li>
                    {new Intl.NumberFormat(locale, {
                      style: 'currency',
                      currency,
                      currencyDisplay: 'symbol',
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 0,
                    }).format(val)}
                  </li>
                </React.Fragment>
              );
            })}
          </ul>
        </div>
      </div>

      <div style={{ display: 'flex' }}>
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
    </div>
  );
}
