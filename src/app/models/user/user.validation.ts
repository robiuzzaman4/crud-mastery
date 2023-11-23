import { z } from "zod";

const UserFullNameSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
});

const UserAddressSchema = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
});

const UserValidationSchema = z.object({
  userId: z.number(),
  username: z.string(),
  password: z.string(),
  fullName: UserFullNameSchema,
  age: z.number(),
  email: z.string().email(),
  isActive: z.boolean(),
  hobbies: z.array(z.string()).default([]),
  address: UserAddressSchema,
});

export default UserValidationSchema;
