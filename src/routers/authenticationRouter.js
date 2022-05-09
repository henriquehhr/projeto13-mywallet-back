import { Router } from "express";

import { signin, signup } from "../controllers/authenticationController.js";

const authenticationRouter = Router();

authenticationRouter.post("/signin", signin);
authenticationRouter.post("/singup", signup);

export default authenticationRouter;