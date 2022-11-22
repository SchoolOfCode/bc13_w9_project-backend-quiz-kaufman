import express from "express";
import morgan from "morgan";
const app = express();
const PORT = 3000;

app.use(morgan("dev"));
//app.use(express.static("./public"));
app.use(express.json());

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});