import cors from "cors";
import express from "express";
import router from "./routes/utilityRoutes.js";

const app = express();

app.use(cors());

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

app.use("/utility-ai", router);

export default app;
