const url = 'https://ch.tetr.io/api/general/stats';
// const url = 'https://api.sampleapis.com/wines/reds';


export default async function handler(req, res) {
    const query = await fetch(url);
    const response = await query.json();
//    console.log('response from API ', response);
    res.status(200).json(response)
}