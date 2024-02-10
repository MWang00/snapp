import {useState, useEffect} from "react";
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

const data = [
    {
      data: {
        battery: 0.7,
        design: .8,
        useful: 0.9,
        speed: 0.67,
        weight: 0.8
      },
      meta: { color: 'blue' }
    }
  ];

const captions = {
    // columns
    battery: 'Battery Capacity',
    design: 'Design',
    useful: 'Usefulness',
    speed: 'Speed',
    weight: 'Weight'
  };

export default function PlayerView() {
    const [player, setPlayer] = useState({})
    useEffect(() => {
        const splitUri = window.location.href.split("/")
        const uuid = splitUri[splitUri.length - 1]
        // fetch player data here
        const arr = new Array();
        for (let i = 0; i < 10; i++) {
            const tmp = new Array();
            for (let j = 0; j < 10; j++) {
                tmp.push(j);
            }
            arr.push(tmp);
        }
        setPlayer({
            name: "John Smith",
            stats: ""
        })

    }, [])
    return(
        <div>
            <h1>Shit</h1>
            
<RadarChart
    captions={captions}
    data={data}
    size={450}
  />
        </div>
    )
}