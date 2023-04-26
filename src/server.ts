import express from "express";
import cors from "cors";

const admin = require("firebase-admin");
const serviceAccount = require("../firebase-adminsdk.json");

const app = express();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any),
});

const port = process.env.PORT || 3000;

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3001"],
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log(process.env.DB_HOST);
});

//get all users from firebase

app.get("/users", (req, res) => {
  admin
    .auth()
    .listUsers()
    .then((listUsersResult: any) => {
      res.send(listUsersResult.users);
    })
    .catch((error: any) => {
      console.log("Error listing users:", error);
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
