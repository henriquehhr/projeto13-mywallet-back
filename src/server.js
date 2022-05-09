import { express, json } from "express";
import cors from "cors";
import dotenv from "dotenv";

import authenticationRouter from "routers/authenticationRouter.js";

const app = express();
dotenv.config();

app.use(json());
app.use(cors());
app.use(authenticationRouter);

app.listen(process.env.PORT, () => console.log(`Server live at http://localhost${process.env.PORT}`));