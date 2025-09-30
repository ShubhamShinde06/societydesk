import { server } from "./app.js";
import connectDB from "./db/mongoDB.db.js";
import dotenv from "dotenv";

dotenv.config({ quiet: true });

const PORT = process.env.PORT;

connectDB()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`server is running at port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Sorry not working", error);
  });