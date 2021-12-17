import React, { useState, useEffect } from 'react';
import { User } from '../types/User.types';
import style from './MainView.module.css'
import UserDetails from './user-details/UserDetails.component';
import UserList from './UserList.component';

export default function MainView() {
  const [users, setUsers] = useState<User[]>([])
  const [selectedUser, setSelectedUser] = useState<User|null>(null)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res => res.json())
                     .then(json => setUsers(json));
  }, [])

  return (<div className={style.mainContainer}>
    <UserList users={users} onSelect={(user) => setSelectedUser(user)} />
    {selectedUser && <UserDetails user={selectedUser} />}
  </div>)
}