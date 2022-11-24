import express from "express";
import morgan from "morgan";
import questionsRouter from "./routes/questions.js"
import topicsRouter from "./routes/topics.js"
const app = express();
const PORT = 3000;

app.use(morgan("dev"));
//app.use(express.static("./public"));
app.use(express.json());
app.use("/api/topics", topicsRouter)
app.use("/api/questions", questionsRouter)



export default app;