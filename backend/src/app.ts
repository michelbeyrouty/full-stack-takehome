import express from "express"
import config from "./config"
import SQL_DB from "./database/db";
import HandleError from "./middlewares/HandleError";
import LogRequestDetails from "./middlewares/LogRequestDetails";
import userRouter from "./routes/userRoutes";

const app = express();
app.use(express.json());

app.use(LogRequestDetails);

app.use("/api", userRouter);

app.use(HandleError);

app.listen(config.PORT, async () => {
    await SQL_DB.connect()
    await SQL_DB.seed()
})
