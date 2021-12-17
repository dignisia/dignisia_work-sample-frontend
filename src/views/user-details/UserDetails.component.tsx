import React from 'react';
import AddressBlock from './AddressBlock.component';
import CompanyBlock from './CompanyBlock.component';
import { User } from '../../types/User.types';

export default function UserDetails({user}: {user: User}) {
  return (<div>
    <h2>Details about {user.name}</h2>
    {user.username && <p>Username: {user.username}</p>}
    {user.email && <p>Email: <a href={`mailto:${user.email}`}>{user.email}</a></p>}
    {user.phone && <p>Phone: {user.phone}</p>}
    {user.website && <p>Website: <a href={user.website}>{user.website}</a></p>}
    {user.address && <p>Address: <AddressBlock a={user.address} /></p>}
    {user.company && <p>Company: <CompanyBlock c={user.company} /></p>}
  </div>)
}