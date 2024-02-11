// const url = 'https://api.sampleapis.com/wines/reds';
import { MongoClient, Double } from "mongodb";

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
    let out = new Array();
    const { playerName, position } = JSON.parse(req.body);
    const client = new MongoClient("mongodb+srv://root:YvvJtMwFiFJRC0OU@football-player-mapping.tke63u1.mongodb.net/?retryWrites=true&w=majority");

    await client.connect();
    console.log("connected")
    const database = client.db("football-player-mappings");
    const col = database.collection(colMappping[position])
    const doc = await col.findOne({"name": playerName, "position": position});
    const embeddingVector = doc.embedding;
    // console.log(doc.embedding.map((elem) => new Decimal128(elem.toString())))
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
                    "queryVector": doc.embedding.map((elem) => new Double(elem.toString())),
                    "limit": 6,
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
                    "limit": 6,
                    "queryVector": doc.embedding.map((elem) => new Double(elem.toString())),
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
            name: doc.name,
            src: doc.img,
            college: doc.college,
            class: doc.class
        }
        obj[posMapping[position]] = parseFloat(doc.nfl)
        out.push(obj)
    });
    res.status(200).json({
        players: out
    })
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