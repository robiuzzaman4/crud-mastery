import { z } from "zod";

const UserFullNameSchema = z.object({
  firstName: z.string({ required_error: "firstName is required!" }),
  lastName: z.string({ required_error: "lastName is required!" }),
});

const UserAddressSchema = z.object({
  street: z.string({ required_error: "street is required!" }),
  city: z.string({ required_error: "city is required!" }),
  country: z.string({ required_error: "country is required!" }),
});

export const UserOrderSchema = z.object({
  productName: z.string({ required_error: "productName is required!" }),
  price: z.number({ required_error: "price is required!" }),
  quantity: z.number({ required_error: "quantity is required!" }),
});

const UserValidationSchema = z.object({
  userId: z.number({ required_error: "userId is required!" }),
  username: z.string({ required_error: "username is required!" }),
  password: z.string({ required_error: "password is required!" }),
  fullName: UserFullNameSchema,
  age: z.number({ required_error: "age is required!" }),
  email: z.string({ required_error: "email is required!" }).email(),
  isActive: z.boolean({ required_error: "isActive is required!" }),
  hobbies: z.array(z.string(), { required_error: "hobbies are required" }),
  address: UserAddressSchema,
  orders: z.array(UserOrderSchema).optional().default([]),
});

export default UserValidationSchema;
