import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./mongodb/connectDB.js";

dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json({limit: '50mb'}));

const startServer = async (port) => {
  try{
    connectDB(process.env.MONGODB_URL);
  }catch(err){
    console.log(err)
  }

  app.listen(port, () => console.log(`Server is running on port ${port}`))
}

startServer(PORT);