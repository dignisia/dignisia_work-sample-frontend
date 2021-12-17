import React from 'react';
import { Company } from '../../types/User.types';
import style from './Block.module.css';

export default function CompanyBlock({c}: {c: Company}) {
  return  (<span className={style.block}>
    {c.name}<br />
    {c.bs}<br />
    "{c.catchPhrase}"
  </span>)
}