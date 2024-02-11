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
    const { name, position } = JSON.parse(req.body);
    const client = new MongoClient("mongodb+srv://root:YvvJtMwFiFJRC0OU@football-player-mapping.tke63u1.mongodb.net/?retryWrites=true&w=majority");
    await client.connect();
    const database = client.db("football-player-mappings");
    const col = database.collection(colMappping[position]);
    const doc = await col.findOne({"name": name, "position": position});

    if (doc == null) {
        res.status(200).json({});
        return
    }

    doc.embedding = handleAvg(doc.embedding, dimMapping[position])
    const obj = {
        stats: doc.embedding,
        name: doc.name,
        src: doc.img,
        college: doc.college,
        class: doc.class,
        position: position
    }

    await client.close();
    res.status(200).json(obj); 
}

function handleAvg(arr, dim) {
    let out = new Array();
    for (let j = 0; j < dim; j++) {
        let avgSum = 0;
        for (let i = j; i < arr.length; i += dim) {
            avgSum += arr[i]
        }
        out.push(avgSum / 4)
    }

    return out;
}