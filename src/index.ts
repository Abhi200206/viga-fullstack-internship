import express from "express";
import logger from "./middlewares/logger";
import cors from "cors";
import errorHandler from "./middlewares/errorHandler";
import organizationRouter from "./routes/organization";
import itemRouter from "./routes/items";
import priceRouter from "./routes/pricing";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger";
import responseRouter from "./routes/calculatePrice";
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
app.use(logger);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use('/api/organization', organizationRouter);
app.use('/api/item', itemRouter);
app.use('/api/price', priceRouter);
app.use('/api/calculate', responseRouter);
app.use(errorHandler);
app.listen(port, () => {
    console.log(`app running on port ${port}`);
});