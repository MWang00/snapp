// const url = 'https://api.sampleapis.com/wines/reds';
import { MongoClient } from "mongodb";


export default async function handler(req, res) {
    const { playerName, playerStats, position } = JSON.parse(req.body);
    const embeddingVector = avgPlayer(playerStats);
    const client = MongoClient("mongodb+srv://root:YvvJtMwFiFJRC0OU@football-player-mapping.tke63u1.mongodb.net/?retryWrites=true&w=majority");
    await client.connect();
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
                    'filter': {
                        'position': {
                            '$eq': [position]
                        }
                    }
                },
                "queryVector": embeddingVector,
                "limit": 5
            }
        ];
    } else {
        agg = [
            {
                "$vectorSearch": {
                    "queryVector": embeddingVector,
                    "limit": 5
                }
            }
        ]
    }

    const result = await col.aggregate(agg);
}

function avgPlayer(player) {
    let dataAvg = new Array();
    for (let i = 0; i < 6; i++) {
        dataAvg.push(0);
    }

    for (let i = 0; i < player.stats.length; i++) {
        for (let j = 0; j < player.stats[i].length; j++) {
            dataAvg[j] += player.stats[i][j];
        }
    }

    dataAvg = dataAvg.map((val) => val / player.stats.length);
    return dataAvg;
}
