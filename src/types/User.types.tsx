export type User = {
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
  email: string;
  address: Address;
  company: Company;
}

export type Address = {
  city: string;
  geo: {lat: string, lng: string}
  street: string;
  suite: string;
  zipcode: string;
}

export type Company =  {
  bs: string;
  catchPhrase: string;
  name: string
}