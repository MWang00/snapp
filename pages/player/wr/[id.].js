import {useState, useEffect} from "react";
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'
import { Grid, Stack } from "@mui/material";
import styles from "../../../styles/Home.module.css"

const colors = ["red", "green", "#eb9534", "purple", "pink"]

export default function PlayerView() {
    const [player, setPlayer] = useState({});
    const [data, setData] = useState([]);
    const [similarPlayers, setSimilarPlayers] = useState([]);
    const [btnState, setBtnState] = useState([false, false, false, false, false])
    const [colorState, setColorState] = useState(["black", "black", "black", "black", "black"])
    const captions = {
      // columns
      Receptions: 'Receptions',
      RecievingYards: 'Receiving Yards',
      RecievingTD: 'Receiving TD',
      Touches: 'Touches',
      RushingYards: 'Rushing Yards',
      RushingTD: 'Rushing TD',
    };

    const onSimilarPlayerClick = (e) => {
      const i = parseInt(e.target.id)
      btnState[i] = !btnState[i];
      if (btnState[i]) {
          setData([...data, {
            data: parsePlayer(similarPlayers[i]),
            meta: { color: colors[i], playerName: similarPlayers[i].name }
          }]);
          console.log(data)
          const tmp = colorState;
          tmp[i] = colors[i];
          setColorState(tmp)
      } else {
        setData(data.filter((p) => p.meta.playerName != similarPlayers[i].name))
        const tmp = colorState;
        tmp[i] = "black";
        setColorState(tmp)
      }
      setBtnState(btnState);
    }

    useEffect(() => {
        const splitUri = window.location.href.split("/")
        const uuid = splitUri[splitUri.length - 1]
        // fetch player data here
        setPlayer({
            name: "Peyton Manning",
            stats: [[89, 144, 1141, 11, 6, 10]],
            qbr: 120
        })
        const player = {
          name: "Peyton Manning",
          stats: [[89, 144, 1141, 11, 6, 10]]
      }

        const playerObj = parsePlayer(player);

        const data = [
          {
            data: playerObj,
            meta: { color: 'blue' }
          }
        ];
        setData(data)
        // Fetch similar players here
        const sp = [
          {
              name: "Josh Allen",
              stats: [[10, 144, 1041, 11, 6, 10]],
              qbr: 120
          },
          {
            name: "Patrick Mahomes",
            stats: [[20, 144, 1101, 11, 6, 10]],
            qbr: 120
        },
        {
            name: "Eli Manning",
            stats: [[30, 144, 1140, 11, 6, 10]],
            qbr: 120
        },
        {
          name: "Tom Brady",
          stats: [[40, 144, 1141, 19, 6, 10]],
          qbr: 120
        },
        {
          name: "Ben Rothlisberger",
          stats: [[110, 144, 1141, 5, 6, 10]],
          qbr: 120
        }
      ];

      setSimilarPlayers(sp);
      console.log(similarPlayers)
    }, []);



    return(
        <div>
        <Grid container spacing={2}>
          <Grid item xs={3}>
          <div style={{ marginLeft: "10%" }}>
          <h1>{player.name}</h1>
          </div>  
          </Grid>
          <Grid item xs={5}>
            <div style={{ borderStyle:"solid", borderColor: "lightgray", borderRadius: "5px", backgroundColor: "white" }}>
              <RadarChart
                captions={captions}
                data={data}
                size={600}
              />
            </div>
          </Grid>
          <Grid item xs={2.5}>
            <div style={{ borderStyle:"solid", borderColor: "lightgray", borderRadius: "5px", backgroundColor: "white", paddingBottom: "5%" }}>
              <h2 style={{marginLeft: "5%"}}>Similar Players</h2>
              {
                similarPlayers.map((p, i) => (
                  <div style={{marginTop: "2.5%", marginBottom: "2.5%", marginLeft: "8%"}} key={`div${i}`}>
                  <button className={styles.playerButton} key={`button${i}`} id={i} style={{color: colorState[i], backgroundColor: "transparent", borderStyle: "solid", borderColor: colorState[i]}} onClick={onSimilarPlayerClick}>
                    {p.name}
                  </button>
                  </div>
                ))
              }
            </div>
          </Grid>
        </Grid>
        </div>
    )

  function parsePlayer(player) {
    let dataAvg = new Array();
    for (let i = 0; i < 5; i++) {
      dataAvg.push(0);
    }

    for (let i = 0; i < player.stats.length; i++) {
      for (let j = 0; j < player.stats[i].length; j++) {
        dataAvg[j] += player.stats[i][j];
      }
    }

    dataAvg = dataAvg.map((val) => val / player.stats.length);
    const playerCategories = [{ name: "Receptions", scale: 158 }, { name: "Receiving Yards", scale: 1640 }, { name: "Receiving TD", scale: 5976 }, { name: "Touches", scale: 62 }, { name: "Rushing Yards", scale: 14 }, { name: "Rushing TD" }];

    const playerObj = {};

    playerCategories.forEach((category, i) => {
      const { name, scale } = category;
      playerObj[name] = dataAvg[i] / scale;
    });
    return playerObj;
  }
}