import {useState, useEffect} from "react";
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'
import { Grid, Stack } from "@mui/material";
import styles from "../../../styles/Home.module.css"
import CircularProgress from '@mui/joy/CircularProgress';
import Typography from '@mui/joy/Typography';
import { extendTheme } from '@mui/joy/styles';
import { NavBar } from "../../../components/NavBar";
import { Speedometer } from "../../../components/Speedometer";
import { useRouter } from "next/router";

const colors = ["#e739d5", "#e74646", "#e7a539", "#49cb3c", "#983df0"]

export default function PlayerView() {
    const router = useRouter();
    const [player, setPlayer] = useState({});
    const [data, setData] = useState([]);
    const [similarPlayers, setSimilarPlayers] = useState([]);
    const [btnState, setBtnState] = useState([false, false, false, false, false])
    const [colorState, setColorState] = useState(["black", "black", "black", "black", "black"])
    const captions = {
      // columns
      Attempts: 'Attempts',
      Completions: 'Completions',
      Interceptions: 'Interceptions',
      TD: 'TD',
      Yards: 'Yards'
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
          name: "Peyton Manning",
          stats: [[89, 144, 1141, 11, 6]],
          qbr: 130,
          position: "QB",
          college: "Tennesse",
          src: "https://www.pro-football-reference.com/req/20230307/images/headshots/MannPe00_2019.jpg"
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
              name: "Josh Allen",
              stats: [[10, 144, 1041, 11, 6]],
              qbr: 120
          },
          {
            name: "Patrick Mahomes",
            stats: [[20, 144, 1101, 11, 6]],
            qbr: 120
        },
        {
            name: "Eli Manning",
            stats: [[30, 144, 1140, 11, 6]],
            qbr: 120
        },
        {
          name: "Tom Brady",
          stats: [[40, 144, 1141, 19, 6]],
          qbr: 120
        },
        {
          name: "Ben Rothlisberger",
          stats: [[110, 144, 1141, 5, 6]],
          qbr: 120
        }
      ];

      setSimilarPlayers(sp);
      console.log(similarPlayers)
    }, []);

    // doesnt work
    extendTheme({
      components: {
        JoyCircularProgress: {
          styleOverrides: {
            root: ({ ownerState, theme }) => ({
              ...(ownerState.size === 'xl' && {
                '--Icon-fontSize': '2rem',
                height: '10000',
                fontSize: theme.vars.fontSize.xl,
              }),
            }),
          },
        },
      },
    });

    return(
        <div>
        <NavBar router={router}/>
        <Grid container spacing={2} style={{marginLeft: "6%", marginTop: "2%"}}>
          <Grid item xs={3} style={{ borderRadius: "20px", boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', backgroundColor: "white", marginTop: "1%" }}>
          <div style={{ marginLeft: "10%" }}>
          <h1>{player.name}</h1>
          <img src={player.src} width={225} style={{borderRadius: "5px", borderStyle: "solid", borderColor: "lightgray"}}></img>
          <h3>Position: <span style={{fontWeight: "normal"}}>{player.position}</span></h3>
          <h3>College: <span style={{fontWeight: "normal"}}>{player.college}</span></h3>
          </div>  
          </Grid>
          <Grid item xs={5}>
            <div style={{ borderRadius: "20px", boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', backgroundColor: "white" }}>
              <RadarChart
                captions={captions}
                data={data}
                size={600}
              />
            </div>
          </Grid>
          <Grid item xs={2.5}>
            <div style={{ borderRadius: "20px", boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', backgroundColor: "white", paddingBottom: "5%", paddingTop: "%"}}>
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
            <div style={{borderRadius: '20px', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', backgroundColor: "white", paddingBottom: "5%", marginTop: "2%"}}>
            <h1 style={{paddingTop: "5%", textAlign: "center" }}>NFL Stats</h1>

              <Grid container style={{textAlign: "center", paddingRight: "5%" }}>
              <Grid item xs={6}>
              <Speedometer name={"QBR"} number={player.qbr} max={158.3}/>
              </Grid>
              <Grid item xs={6}>
              <Speedometer name={"QBR"} number={player.qbr} max={158.3}/>
              </Grid>
              <Grid item xs={6} style={{paddingTop:"9%"}}>
              <Speedometer name={"QBR"} number={player.qbr} max={158.3}/>
              </Grid>
              <Grid item xs={6} style={{paddingTop:"9%"}}>
              <Speedometer name={"QBR"} number={player.qbr} max={158.3}/>
              </Grid>
              </Grid>
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
    const playerCategories = [{ name: "Completions", scale: 512 }, { name: "Attempts", scale: 719 }, { name: "Yards", scale: 5976 }, { name: "TD", scale: 62 }, { name: "Interceptions", scale: 14 }];

    const playerObj = {};

    playerCategories.forEach((category, i) => {
      const { name, scale } = category;
      playerObj[name] = dataAvg[i] / scale;
    });
    return playerObj;
  }
}
