import {useState, useEffect} from "react";
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'
import { Grid, Stack } from "@mui/material";
import styles from "../../../styles/Home.module.css"
import { useRouter } from "next/router";
import { NavBar } from "../../../components/NavBar";
import { Speedometer } from "../../../components/Speedometer";

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
      Solo: 'Solo',
      Asst: 'Asst',
      Sacks: 'Sacks',
      Interceptions: 'Interceptions',
      FF: "Forced Fum"
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
            name: "Micah Parsons",
            stats: [52, 57, 5.0, 0, 4],
            inNfl: true,
            dr: 120,
            position: "DEF",
            src: "https://www.pro-football-reference.com/req/20230307/images/headshots/ParsMi00_2023.jpg",
            college: "Penn St"
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
              stats: [52, 57, 5.0, 0, 4],
              dr: 120
          },
          {
            name: "Patrick Mahomes",
            stats: [52, 57, 5.0, 0, 4],
            dr: 120
        },
        {
            name: "Eli Manning",
            stats: [52, 57, 5.0, 0, 4],
            dr: 120
        },
        {
          name: "Tom Brady",
          stats: [52, 57, 5.0, 0, 4],
          dr: 120
        },
        {
          name: "Ben Rothlisberger",
          stats: [52, 57, 5.0, 0, 4],
          dr: 120
        }
      ];

      setSimilarPlayers(sp);
      console.log(similarPlayers)
    }, []);



    return(
        <div>
        <NavBar router={router}/>
        <Grid container spacing={2} style={{paddingLeft: "7%", marginTop: "2%"}}>
          <Grid item xs={3} style={{ borderRadius: "20px", boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', backgroundColor: "white", marginTop: "1%" }}>
          <div style={{ marginLeft: "10%" }}>
          <h1>{player.name}</h1>
          <img src={player.src} width={225} style={{borderRadius: "5px", borderStyle: "solid", borderColor: "lightgray"}}></img>
          <h3>Position: <span style={{fontWeight: "normal"}}>{player.position}</span></h3>
          <h3>College: <span style={{fontWeight: "normal"}}>{player.college}</span></h3>
          </div>  
          </Grid>
          <Grid item xs={5.5}>
            <div style={{ borderRadius: "20px", boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', backgroundColor: "white" }}>
              <RadarChart
                captions={captions}
                data={data}
                size={600}
              />
            </div>
          </Grid>
          <Grid item xs={2.5}>
            <div style={{ borderRadius: "20px", boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', backgroundColor: "white", paddingBottom: "7%", paddingTop: "2%", paddingLeft:"2%" }}>
              <h2 style={{marginLeft: "5%"}}>Similar Players</h2>
              {
                similarPlayers.map((p, i) => (
                  <div style={{marginTop: "2.5%", marginBottom: "2.5%", marginLeft: "8%"}} key={`div${i}`}>
                  <button className={styles.playerButton} key={`button${i}`} id={i} style={{color: colorState[i], cursor: 'pointer', backgroundColor: "transparent", borderStyle: "solid", borderColor: colorState[i] }} onClick={onSimilarPlayerClick}>
                    {p.name}
                  </button>
                  </div>
                ))
              }
            </div>
            <div style={{ borderRadius: '20px', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', backgroundColor: "white", paddingBottom: "5%", marginTop: "2%"}}>
            <h1 style={{ paddingTop: "5%", textAlign: "center"  }}>NFL Stats</h1>
              <Grid container style={{ textAlign: "center", paddingRight: "5%"}}>
              <Grid item xs={6}>
              <Speedometer name={"DR"} number={player.dr} />
              </Grid>
              <Grid item xs={6}>
              <Speedometer name={"DR"} number={player.dr} />
              </Grid>
              <Grid item xs={6} style={{paddingTop:"9%"}}>
              <Speedometer name={"DR"} number={player.dr} />
              </Grid>
              <Grid item xs={6} style={{paddingTop:"9%"}}>
              <Speedometer name={"DR"} number={player.dr} />
              </Grid>
              </Grid>
              </div>
          </Grid>
        </Grid>
        </div>
    )

  function parsePlayer(player) {
    let dataAvg = player.stats
    const playerCategories = [{ name: "Solo", scale: 104 }, { name: "Asst", scale: 322 }, { name: "Sacks", scale: 20 }, { name: "Interceptions", scale: 27 }, { name: "FF", scale: 14 }];

    const playerObj = {};

    playerCategories.forEach((category, i) => {
      const { name, scale } = category;
      playerObj[name] = Math.max(dataAvg[i] / scale, 0);
    });
    console.log(playerObj)
    return playerObj;
  }
}
