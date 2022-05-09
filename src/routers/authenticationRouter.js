import { Router } from "express";

import { signin, signup } from "../controllers/authenticationController.js";

const authenticationRouter = Router();

authenticationRouter.post("/signin", signin);
authenticationRouter.post("/signup", signup);

export default authenticationRouter;