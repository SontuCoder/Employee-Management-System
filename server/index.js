import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/userRouter.js"; 

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

// Define the user route
app.use("/user", userRouter);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
});
