enum GenderEnum {
  MALE = 'male',
  FEMALE = 'female',
}

export interface User {
  name: string;
  age: number;
  gender: GenderEnum;
  location: string;
}

export interface UserState{
  users: User[];
}


