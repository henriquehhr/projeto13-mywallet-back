import db from "./../database";

export async function registerTransaction(req, res) {
    const { userID } = req.locals;
    const { transaction } = req.post;
    try {
        await db.collection("transactions").insertOne({ userID, transaction });
        res.send(401);
    } catch (e) {
        res.send(e);
    }
}

export async function getTransactions(req, res) {
    const { userID } = req.locals;
    try {
        const transactions = await db.collection("transactions").find({ userID }).toArray();
        res.send(transactions);
    } catch (e) {
        res.send(e);
    }
}