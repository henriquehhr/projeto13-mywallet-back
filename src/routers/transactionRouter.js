import { Router } from "express";

import { registerTransaction, getTransactions } from "./../controllers/transactionController.js";
import { validateUser } from "../middlewares/validateUser.js";

const transactionRouter = Router();

transactionRouter.use(validateUser);

transactionRouter.post("/transactions", registerTransaction);
transactionRouter.get("/transactions", getTransactions);

export default transactionRouter;