export interface ContactData {
  id: string;
  name: string;
  image: string;
  balance: number;
}

export interface ContactStateStructure {
  friends: ContactData[];
  friend: ContactData;
}
