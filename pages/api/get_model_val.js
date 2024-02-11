export default async function handler(req, res) {
    const { name, position } = JSON.parse(req);
    const client = new MongoClient("mongodb+srv://root:YvvJtMwFiFJRC0OU@football-player-mapping.tke63u1.mongodb.net/?retryWrites=true&w=majority");
    await client.connect();
    const database = client.db("football-player-mappings");
    const col = database.collection(colMappping[position]);
    const doc = await col.findOne({"name": name, "position": position});
    const body = {
        input: doc.embedding,
        position: position
    }

    const res = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: JSON.stringify(body)
    })

    const out = await res.json();

    return out
}