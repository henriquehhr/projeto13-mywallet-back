import { Router } from "express";

import { signin, signup } from "../controllers/authenticationController";

const router = Router();

router.post("/signin", signin);
router.post("/singup", signup);