// const url = 'https://api.sampleapis.com/wines/reds';


export default async function handler(req, res) {
    const { playerName, playerStats } = JSON.parse(req.body);
    const embeddingVector = avgPlayer(playerStats);
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
