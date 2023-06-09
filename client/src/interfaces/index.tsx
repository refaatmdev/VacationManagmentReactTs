export interface IVacation {
  id: string;
  destination: string;
  description: string;
  startAt: string;
  endAt: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  image?: string;
  numberOfFollowers?: number;
}

export interface IUser {
  userName: string;
  password: string;
}

export interface IUserRegister {
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
}
