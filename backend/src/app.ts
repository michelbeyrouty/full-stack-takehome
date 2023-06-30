import express from "express"
import config from "./constants/config"
import SQL_DB from "./database/db";
import handleError from "./middlewares/handleError";
import logRequestDetails from "./middlewares/logRequestDetails";
import userRouter from "./routes/userRoutes";
import orderRouter from "./routes/orderRoutes";
import allowCrossDomain from "./middlewares/cors"

const app = express();
app.use(express.json());

app.use(logRequestDetails);
app.use(allowCrossDomain);

app.use("/api", userRouter);
app.use("/api", orderRouter);

app.use(handleError);

app.listen(config.PORT, async () => {
    await SQL_DB.connect()
    await SQL_DB.seed()
})
