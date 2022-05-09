import { Router } from "express";

import { registerTransaction, getTransactions } from "./../controllers/transactionController.js";

const transactionRouter = Router();

transactionRouter.post("/transactions", registerTransaction);
transactionRouter.get("/transactions", getTransactions);

export default transactionRouter;