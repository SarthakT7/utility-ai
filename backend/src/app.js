import express from "express";
import router from "./routes/utilityRoutes.js";

const app = express();

app.use(express.json());

app.use("/utility-ai", router);

export default app;
