interface UserType {
  login: string;
  password: string;
}

export const users: UserType[] = [
  {
    login: 'admin',
    password: '123',
  },
  {
    login: 'user',
    password: '1234',
  },
  {
    login: 'user2',
    password: '1235',
  },
];
