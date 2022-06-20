export enum GenderEnum {
  MALE = 'male',
  FEMALE = 'female',
}

export enum StatusEnum{
  ACTIVE = 'active',
  INACTIVE = 'inactive'
}

export interface User {
  name: string;
  email: string;
  gender: GenderEnum;
  status: StatusEnum;
}

export interface UserState{
  users: User[];
}


