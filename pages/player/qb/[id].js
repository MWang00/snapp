import {useState, useEffect} from "react";
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'
import { Grid} from "@mui/material";
import styles from "../../../styles/Home.module.css"
import { NavBar } from "../../../components/NavBar";
import { Speedometer } from "../../../components/SpeedometerQB";
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
      const uuid = splitUri[splitUri.length - 1].replace("%20", " ")
      console.log(splitUri[splitUri.length - 1].replace("%20", " "))
      // fetch player data here
      fetch("/api/get_player", {
        method: "POST",
        body: JSON.stringify({
          name: uuid,
          position: "qb"
        })
      }).then((res) => res.json().then((player) => {
        console.log(player)
          setPlayer(player)
          const playerObj = parsePlayer(player);

        const data = [
          {
            data: playerObj,
            meta: { color: 'blue' }
          }
        ];
        setData(data)

        fetch("/api/similarity_search", {
          method: "POST",
          body: JSON.stringify({
            playerName: player.name,
            position: "qb"
          })
        }).then((res) => res.json().then((tmp) => {
          const sp = tmp.players.slice(1, tmp.length)
          setSimilarPlayers(sp);
          player.position = player.position.toUpperCase();
          setPlayer(player)
        }))

        fetch("/api/get_model_val", {
          method: "POST",
          body: JSON.stringify({
            playerName: player.name,
            position: "qb"
          })
        }).then((res) => res.json().then((body) => {
          const tmp = player;
          tmp.qbr = Math.round(body.predictions[0]);
          setPlayer(tmp);
        }))
      }));
      
  }, []);


    return(
        <div>
        <NavBar />
        <Grid container spacing={2} style={{paddingLeft: "7%", marginTop: "4%"}}>
          <Grid item xs={3} style={{ borderRadius: "20px", boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', backgroundColor: "white", marginTop: "1%" }}>
          <div style={{ marginLeft: "11%" }}>
          <h1 style={{textAlign: "center", marginLeft: "-18%"}}>{player.name}</h1>
          <img src={player.src} width={225} style={{borderRadius: "10px", borderStyle: "solid", borderColor: "black", borderWidth: "2px" }}></img>
          <h3>Position: <span style={{fontWeight: "normal"}}>{player.position}</span></h3>
          <h3>College: <span style={{fontWeight: "normal"}}>{player.college}</span></h3>
          <h3>Class: <span style={{fontWeight: "normal"}}>{player.class}</span></h3>
          </div>  
          </Grid>
          <Grid item xs={5.5}>
            <div style={{ borderRadius: "20px", boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', backgroundColor: "white", paddingLeft: "7.5%"}}>
              <h1 style={{textAlign: "center", paddingTop: "28px", marginBottom: "27px", marginTop: "-3px", marginRight: "5%"}}>Player Statistics</h1>
              <div style={{marginLeft: "auto", marginRight: "auto", display:"block"}}>
              <RadarChart
                captions={captions}
                data={data}
                size={500}
              />
            </div>
            </div>
          </Grid>
          <Grid item xs={2.5}>
            <div style={{ borderRadius: "20px", boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', backgroundColor: "white", paddingBottom: "7%", paddingTop: "2%", paddingLeft:"2%" }}>
              <h2 style={{textAlign: "center"}}>Similar Players</h2>
              {
                similarPlayers.map((p, i) => (
                  <div style={{marginTop: "2.5%", marginBottom: "2.5%", marginLeft: "10%"}} key={`div${i}`}>
                  <button className={styles.playerButton} key={`button${i}`} id={i} style={{color: colorState[i], cursor: 'pointer', backgroundColor: "transparent", borderStyle: "solid", borderColor: colorState[i]}} onClick={onSimilarPlayerClick}>
                    {p.name}
                  </button>
                  </div>
                ))
              }
            </div>
            <div style={{borderRadius: '20px', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', backgroundColor: "white", paddingBottom: "5%", marginTop: "2%"}}>
            <h1 style={{paddingTop: "5%", textAlign: "center" }}>NFL Stats</h1>

            <Grid container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: "5%" }}>
              <Grid item xs={12} sm={6} style={{ display: 'flex', justifyContent: 'center' }}>
                <Speedometer name={"QBR"} number={player.qbr - 50} max={158.3}/>
              </Grid>
            </Grid>
            </div>
          </Grid>
        </Grid>
        </div>
    )

  function parsePlayer(player) {
    let dataAvg = player.stats;

    dataAvg = dataAvg.map((val) => val / player.stats.length);
    const playerCategories = [{ name: "Completions", scale: 300/6 }, { name: "Attempts", scale: 450/6 }, { name: "Yards", scale: 3800/6 }, { name: "TD", scale: 32/6 }, { name: "Interceptions", scale: 12/6}];

    const playerObj = {};

    playerCategories.forEach((category, i) => {
      const { name, scale } = category;
      playerObj[name] = dataAvg[i] / scale;
    });
    return playerObj;
  }
}
