import {useState, useEffect} from "react";
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'
import { Grid, Stack } from "@mui/material";
import styles from "../../../styles/Home.module.css"
import { NavBar } from "../../../components/NavBar";
import { Speedometer } from "../../../components/Speedometer";
import { useRouter } from "next/router";

const colors = ["#e739d5", "#e74646", "#e7a539", "#49cb3c", "#983df0"]

export default function PlayerView() {
    const router = useRouter()
    const [player, setPlayer] = useState({});
    const [data, setData] = useState([]);
    const [similarPlayers, setSimilarPlayers] = useState([]);
    const [btnState, setBtnState] = useState([false, false, false, false, false])
    const [colorState, setColorState] = useState(["black", "black", "black", "black", "black"])
    const captions = {
      // columns
      Receptions: 'Receptions',
      ReceivingYards: 'Receiving Yards',
      ReceivingTD: 'Receiving TD',
      Touches: 'Rush Att',
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
        const player = {
            name: "Michael Pittman",
            stats: [101, 1275, 11, 1, 9, 11],
            inNfl: true,
            rr: 120,
            src: "https://www.pro-football-reference.com/req/20230307/images/headshots/PittMi01_2023.jpg",
            position: "WR",
            college: "USC"
        }

        setPlayer(player)
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
              name: "Larry Fitzgerald",
              stats: [69, 1005, 12, 0, 0, 0],
              rr: 120
          },
          {
            name: "Patrick Mahomes",
            stats: [101, 1275, 11, 1, 9, 11],
            rr: 120
        },
        {
            name: "Eli Manning",
            stats: [101, 1275, 11, 1, 9, 11],
            rr: 120
        },
        {
          name: "Tom Brady",
          stats: [101, 1275, 11, 1, 9, 11],
          rr: 120
        },
        {
          name: "Ben Rothlisberger",
          stats: [101, 1275, 11, 1, 9, 11],
          rr: 120
        }
      ];

      setSimilarPlayers(sp);
      console.log(similarPlayers)
    }, []);



    return(
        <div>
        <NavBar router={router}/>
        <Grid container spacing={2} style={{marginTop: "2%"}}>
          <Grid item xs={3} style={{ borderStyle:"solid", borderColor: "lightgray", borderRadius: "5px", backgroundColor: "white", marginTop: "1%" }}>
          <div style={{ marginLeft: "10%" }}>
          <h1>{player.name}</h1>
          <img src={player.src} width={225} style={{borderRadius: "5px", borderStyle: "solid", borderColor: "lightgray"}}></img>
          <h3>Position: <span style={{fontWeight: "normal"}}>{player.position}</span></h3>
          <h3>College: <span style={{fontWeight: "normal"}}>{player.college}</span></h3>
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
                  <button className={styles.playerButton} key={`button${i}`} id={i} style={{color: colorState[i], cursor: 'pointer', backgroundColor: "transparent", borderStyle: "solid", borderColor: colorState[i]}} onClick={onSimilarPlayerClick}>
                    {p.name}
                  </button>
                  </div>
                ))
              }
            </div>
            <div style={{ borderStyle:"solid", borderColor: "lightgray", borderRadius: "5px", backgroundColor: "white", paddingBottom: "5%", marginTop: "2%"}}>
            <h1 style={{ marginLeft: "5%" }}>NFL Stats</h1>
              <Grid container style={{marginLeft: "5%"}}>
              <Grid item xs={6}>
              <Speedometer name={"RR"} number={player.rr} />
              </Grid>
              <Grid item xs={6}>
              <Speedometer name={"RR"} number={player.rr} />
              </Grid>
              <Grid item xs={6} style={{paddingTop:"9%"}}>
              <Speedometer name={"RR"} number={player.rr} />
              </Grid>
              <Grid item xs={6} style={{paddingTop:"9%"}}>
              <Speedometer name={"RR"} number={player.rr} />
              </Grid>
              </Grid>
              </div>
          </Grid>
        </Grid>
        </div>
    )

  function parsePlayer(player) {
    let dataAvg = player.stats;

    const playerCategories = [{ name: "Receptions", scale: 158 }, { name: "ReceivingYards", scale: 1640 }, { name: "ReceivingTD", scale: 27 }, { name: "Touches", scale: 450 }, { name: "RushingYards", scale: 2628 }, { name: "RushingTD", scale: 37 }];

    const playerObj = {};

    playerCategories.forEach((category, i) => {
      const { name, scale } = category;
      playerObj[name] = Math.max(dataAvg[i] / scale, 0);
    });
    console.log(playerObj)
    return playerObj;
  }
}