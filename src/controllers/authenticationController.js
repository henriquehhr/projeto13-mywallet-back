import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

import db from "./../database"

export async function signup(req, res) {
    const user = req.body;
    const password = req.body.password;

    const passwordHash = bcrypt.hashSync(password, 10);

    try {
        await db.collection("users").insertOne({ ...user, password: passwordHash });
        res.sendStatus(201);
    } catch (e) {
        res.send(e);
    }
}

export async function signin(req, res) {
    const { email, password } = req.body;
    try {
        const user = await db.collection("users").findOne({ email });
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = uuid();
            await db.collection("sessions").insertOne({
                userId: user._id,
                token,
            });
            res.sendStatus(200);
        } else {
            res.sendStatus(401);
        }
    } catch (error) {
        res.send(e);
    }
}