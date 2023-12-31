import { Model } from "mongoose";

export interface IUserFullName {
  firstName: string;
  lastName: string;
}

export interface IUserAddress {
  street: string;
  city: string;
  country: string;
}

export interface IUserOrder {
  productName: string;
  price: number;
  quantity: number;
}

export interface IUser {
  userId: number;
  username: string;
  password: string;
  fullName: IUserFullName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: IUserAddress;
  orders?: IUserOrder[];
}

// custom interface for UserModel
export interface UserModel extends Model<IUser> {
  isUserExists(userId: number): Promise<IUser | null>;
}
