import "dotenv/config";
import express, { json } from "express";
import cors from "cors";
import jobsroute from "./routes/jobs.routes";
import userroute from "./routes/user.route";
import connectDB from "./config/db";
import errorHandler from "./middleware/errorhandler";

// Connect to the database
connectDB();

// Initiate express, activate the json middleware and set PORT
const app = express();
app.use(cors());
app.use(json());
const PORT = process.env.PORT || 5000;

app.use("/api/jobs", jobsroute);

app.use("/api/user", userroute);

app.use(() => {
  throw new Error("End point not set");
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));
