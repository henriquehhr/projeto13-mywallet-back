import { Router } from "express";

import { registerTransaction, getTransactions } from "./../controllers/transactionController.js";
import { validateUser } from "../middlewares/validateUser.js";

const transactionRouter = Router();

//transactionRouter.use(validateUser);

transactionRouter.post("/transactions", validateUser, registerTransaction);
transactionRouter.get("/transactions", validateUser, getTransactions);

export default transactionRouter;