import { ObjectId } from "mongodb";

import db from "./../database/index.js";

export async function validateUser(req, res, next) {

    const validateTokenFormat = req.headers.authorizarion.slice(0, 7);
    if (validateTokenFormat != "Bearer ") {
        return res.sendStatus(422);
    }
    const token = req.headers.authorizarion.slice(7);
    const userId = await db.collection("sessions").findOne({ token });
    if (!user) {
        return res.sendStatus(401);
    }
    const user = await db.collection("users").findOne({ userId: new ObjectId(userId) });
    req.locals.user = user;
    next();
}