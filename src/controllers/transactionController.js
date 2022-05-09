import db from "./../database/index.js";

export async function registerTransaction(req, res) {
    const { userId } = res.locals;
    const { transaction } = req.body;
    try {
        await db.collection("transactions").insertOne({ userId, transaction });
        res.sendStatus(201);
    } catch (e) {
        res.send(e);
    }
}

export async function getTransactions(req, res) {
    const { userId } = res.locals;
    try {
        const transactions = await db.collection("transactions").find({ userId }).toArray();
        res.send(transactions);
    } catch (e) {
        res.send(e);
    }
}