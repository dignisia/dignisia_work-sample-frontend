import React, { useState } from 'react';
import { User } from '../types/User.types';
import style from './UserList.module.css';

export default function UserList({users, onSelect}: {users: User[], onSelect: (user: User) => void}) {
  const [searchTerm, setSearchTerm] = useState<string>('')
  
  function searchFilter(user: User) {
    // Returns any occurrence of entire search string in either name or username
    return [user.username, user.name].some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  return <div className={style.list}>
    <input type="text" placeholder="search" onChange={(e) => setSearchTerm(e.target.value)} className={style.search}/>
    {users.filter(searchFilter).map(user => (
      <button key={user.id} className={style.userTile} onClick={() => onSelect(user)}>{user.username}</button>
    ))}
  </div>
}