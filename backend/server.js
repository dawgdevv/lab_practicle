import express from "express";
import moongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/user.routes.js";

const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

moongoose
  .connect(
    "mongodb+srv://nishantraj:nishant24@cluster0.0p0yq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(error));
app.use("/api/users", userRouter);
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
