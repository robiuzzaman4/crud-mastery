import dotnev from "dotenv";
import path from "path";

// setup env config
dotnev.config({
  path: path.join(process.cwd(), ".env"),
});

// export all env variables
export default {
  port: process.env.PORT,
  database_uri: process.env.DATABASE_URI,
  salt_rounds: process.env.SALT_ROUNDS,
};
