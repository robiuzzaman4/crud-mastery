import mongoose from "mongoose";
import config from "./config";
import app from "./app";

const main = async () => {
  try {
    // connect database
    await mongoose.connect(config.database_uri as string);

    // app listening
    app.listen(config.port, () => {
      console.log(
        `***Crud Mastery Application Is Running On Port: ${config.port}***`,
      );
    });
  } catch (error) {
    console.log(error);
  }
};

// invoke main()
main();
