import express from "express";
import cors from "cors";
import userRouter from "./api/userRouter";

const app = express();

const port = process.env.PORT || 8080;

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

app.use("", userRouter);

app.listen(port, () => {
  console.log(`NgShift listening on http://localhost:${port}`);
});
