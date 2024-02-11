import { MongoClient } from "mongodb";

const dimMapping = {
    "qb": 5,
    "rb": 6,
    "wr": 6,
    "def": 6
}

const posMapping = {
    "qb": "qbr",
    "rb": "rr",
    "wr": "rr",
    "def": "dr"
}

const colMappping = {
    "qb": "qb",
    "def": "def",
    "rb": "rb/wr",
    "wr": "rb/wr"
}

export default async function handler(req, res) {
    const { name, position } = req.body;
    const client = new MongoClient("mongodb+srv://root:YvvJtMwFiFJRC0OU@football-player-mapping.tke63u1.mongodb.net/?retryWrites=true&w=majority");
    await client.connect();
    const database = client.db("football-player-mappings");
    const col = database.collection(colMappping[position]);
    const doc = await col.findOne({"name": name, "position": position});
    const body = {
        input: doc.embedding,
        position: position
    }

    const apiRes = await fetch("http://localhost:5001/predict", {
        method: "POST",
        body: JSON.stringify(body)
    })

    const out = await apiRes.json();
    console.log(out);
    return res.status(200).json(out)
}