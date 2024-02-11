// const url = 'https://api.sampleapis.com/wines/reds';
import { MongoClient } from "mongodb";

const dimMapping = {
    "qb": 5,
    "rb": 6,
    "wr": 6,
    "def": 8
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
    let out = new Array();
    const { playerName, playerStats, position } = req.body;
    const embeddingVector = playerStats;
    const client = new MongoClient("mongodb+srv://root:YvvJtMwFiFJRC0OU@football-player-mapping.tke63u1.mongodb.net/?retryWrites=true&w=majority");

    await client.connect();
    console.log("connected")
    const database = client.db("football-player-mappings");
    const col = database.collection(colMappping[position])
    let agg;
    if (position === "wr" || position === "rb")  {
        agg = [
            {
                '$vectorSearch': {
                    'index': 'vector_index',
                    'path': 'embedding',
                    'filter': {'$and': [
                        {
                            'position': {
                                '$eq': position
                            }
                        },
                        {
                            'inNfl': {
                                '$eq': true
                            }
                        }
                    ]},
                    "queryVector": embeddingVector,
                    "limit": 5,
                    "numCandidates": 5392
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
                    "numCandidates": 5392,
                    'filter': {
                        'inNfl': {
                            '$eq': true
                        }
                    }
                },
            }
        ]
    }

    const result = col.aggregate(agg);
    out = new Array();
    await result.forEach((doc) => {
        doc.embedding = handleAvg(doc.embedding, dimMapping[position]); 
        const obj = {
            stats: doc.embedding,
            name: doc.name
        }
        obj[posMapping[position]] = parseFloat(doc.nfl)
        out.push(obj)
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