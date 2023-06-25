import express from "express"
import config from "./config"
import SQL_DB from "./database/db";
import ErrorHandler from "./middlewares/ErrorHandler";
import userRouter from "./routes/userRoutes";

const app = express();
app.use(express.json());

app.use("/api", userRouter);

app.use(ErrorHandler);

app.listen(config.PORT, async () => {
    await SQL_DB.connect()
    await SQL_DB.seed()
})
