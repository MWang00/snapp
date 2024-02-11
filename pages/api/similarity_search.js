// const url = 'https://api.sampleapis.com/wines/reds';
import { MongoClient } from "mongodb";

const dimMapping = {
    "qb": 5,
    "rb": 6,
    "wr": 6,
    "def": 8
}

export default async function handler(req, res) {
    let out = new Array();
    const { playerName, playerStats, position } = req.body;
    const embeddingVector = playerStats;
    const client = new MongoClient("mongodb+srv://root:YvvJtMwFiFJRC0OU@football-player-mapping.tke63u1.mongodb.net/?retryWrites=true&w=majority");

    await client.connect();
    console.log("connected")
    const database = client.db("football-player-mappings");
    let col;
    switch (position) {
        case "qb":
            col = database.collection("qb");
            break;
        case "wr" | "rb":
            col = database.collection("rb/wr");
            break;
        default:
            col = database.collection("def");
    }
    let agg;

    if (position === "wr" || position === "rb")  {
        agg = [
            {
                '$vectorSearch': {
                    'index': 'vector_index',
                    'path': 'embedding',
                    'filter': {
                        'position': {
                            '$eq': [position]
                        }
                    },
                    "queryVector": embeddingVector,
                    "limit": 5,
                    "numCandidates": 200
                }
            }
        ];
    } else {
        agg = [
            {
                "$vectorSearch": {
                    'index': 'vector_index',
                    'path': 'embedding',
                    "limit": 5,
                    "queryVector": embeddingVector,
                    "numCandidates": 200
                },
            }
        ]
    }

    const result = col.aggregate(agg);
    out = new Array();
    await result.forEach((doc) => {
        doc.embedding = handleAvg(doc.embedding, dimMapping[position]); 
        out.push(doc)
    });
    res.status(200).json(out)
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