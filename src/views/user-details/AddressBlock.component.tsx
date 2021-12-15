import React from 'react';
import { Address } from '../../types/User.types';
import style from './Block.module.css';

export default function AddressBlock({a}: {a: Address})  {
  return <span className={style.block}>
    {a.street}<br />
    {a.suite}<br />
    {a.zipcode} {a.city}
  </span>
}