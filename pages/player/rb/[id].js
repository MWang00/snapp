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
      const uuid = splitUri[splitUri.length - 1].replace("%20", " ")
      // fetch player data here
      fetch("/api/get_player", {
        method: "POST",
        body: JSON.stringify({
          name: uuid,
          position: "rb"
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
            position: "rb"
          })
        }).then((res) => res.json().then((tmp) => {
          const sp = tmp.players.slice(1, tmp.length)
          setSimilarPlayers(sp);
          player.position = player.position.toUpperCase();
          setPlayer(player)
        }))
      }))
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
            <div style={{ borderRadius: '20px', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', backgroundColor: "white", paddingBottom: "5%", marginTop: "2%"}}>
            <h1 style={{ paddingTop: "5%", textAlign: "center" }}>NFL Stats</h1>
              <Grid container style={{ textAlign: "center", paddingRight: "5%" }}>
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

    const playerCategories = [{ name: "RushingYards", scale: 1450 }, { name: "Touches", scale: 225 }, { name: "RushingTD", scale: 20 }, { name: "Receptions", scale: 30 }, { name: "ReceivingYards", scale: 300 }, { name: "ReceivingTD", scale: 3 }];

    const playerObj = {};

    playerCategories.forEach((category, i) => {
      const { name, scale } = category;
      playerObj[name] = Math.max(dataAvg[i] / scale, 0);
    });
    console.log(playerObj)
    return playerObj;
  }
}