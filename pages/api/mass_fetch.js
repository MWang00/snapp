import { MongoClient } from "mongodb";

const colMappping = {
    "qb": "qb",
    "def": "def",
    "rb": "rb/wr",
    "wr": "rb/wr"
}

export default async function handler(req, res) {
    const client = new MongoClient("mongodb+srv://root:YvvJtMwFiFJRC0OU@football-player-mapping.tke63u1.mongodb.net/?retryWrites=true&w=majority");
    await client.connect();
    const database = client.db("football-player-mappings");
    let out = new Array();
    const pos = ["qb", "def", "rb/wr"];
    for (let i = 0; i < pos.length; i++) {
        pos[i]
        const col = database.collection(pos[i]);
        await col.find().forEach((val) => {
            const obj = {
                name: val.name,
                college: val.college,
                class: val.class,
                position: val.position
            }
            if (val.class > 2000) {
                out.push(obj)
            }
        });
    }

    await client.close();

    res.status(200).json(out)
}