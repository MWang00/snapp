import React, { useState, useEffect } from 'react';
import { SortableTable } from '../components/SortableTable';
import { NavBar } from '../components/NavBar';
import { SearchBar } from '../components/SearchBar';
import styles from '../styles/Home.module.css';
import {LinearGradient} from "react-text-gradients"
import { Button } from '@mui/joy';


// const [anchorEl, setAnchorEl] = React.useState(null);
// const open = Boolean(anchorEl);

// const theme = createTheme({
//   palette: {
//     primary: {
//         main: '#3774d4',
//       },
//       secondary: {
//         main: '#f14444',
//       },
//   },
// });

function createData(name, school, position, score, similarplayer) {
  return { name, school, position, score, similarplayer };
}

const initialRows = [
  createData('John Doe', 'University of Alabama', 'WR', 1, 'Julio Jones'),
  createData('Alex Smith', 'Ohio State University', 'WR', 2, 'Michael Thomas'),
  createData('Brian Taylor', 'Clemson University', 'WR', 1, 'DeAndre Hopkins'),
  createData('Chris Johnson', 'University of Florida', 'WR', 3, 'Emmanuel Sanders'),
  createData('Derek Allen', 'LSU', 'WR', 2, 'Jarvis Landry'),
  createData('Evan White', 'University of Oklahoma', 'WR', 1, 'CeeDee Lamb'),
  createData('Frank Brown', 'Penn State', 'WR', 3, 'Chris Godwin'),
  createData('George King', 'University of Notre Dame', 'WR', 2, 'Chase Claypool'),
  createData('Henry Davis', 'University of Southern California', 'WR', 4, 'Robert Woods'),
  createData('Isaac Wilson', 'Stanford University', 'WR', 3, 'JJ Arcega-Whiteside'),
  createData('Jack Thomas', 'University of Michigan', 'WR', 4, 'Donovan Peoples-Jones'),
  createData('Kevin Young', 'University of Georgia', 'WR', 2, 'A.J. Green'),
  createData('Liam Carter', 'Texas A&M', 'WR', 1, 'Mike Evans'),
  createData('Mason Hill', 'University of South Carolina', 'WR', 3, 'Deebo Samuel'),
  createData('Nathan Baker', 'TCU', 'WR', 4, 'Jalen Reagor'),
  createData('Oscar Adams', 'University of California, Berkeley', 'WR', 2, 'DeSean Jackson'),
  createData('Patrick Scott', 'University of Mississippi', 'WR', 1, 'DK Metcalf'),
  createData('Quinn Lewis', 'University of Louisville', 'WR', 3, 'DeVante Parker'),
  createData('Ryan Martinez', 'University of Colorado', 'WR', 4, 'Laviska Shenault Jr.'),
  createData('Samuel Green', 'University of Washington', 'WR', 2, 'John Ross')
];

export default function Home() {
  const [rows, setRows] = useState(initialRows.slice(0, 5));
  useEffect(() => {
    console.log(rows)
  }, []);

  return (
    <div>
      <img style={{ width: "120vh", marginTop: "4%", marginLeft: "auto", marginRight: "auto", display:"block"}} src="https://media.discordapp.net/attachments/1162065201152139294/1206072179209543690/snapp.png?ex=65daad3f&is=65c8383f&hm=36866481f9d59dce824e06d88b9f48d41f023add4ba90f400f6a31315785b46f&=&format=webp&quality=lossless&width=2268&height=664" alt="SNAPP" />
      
      <h3 style={{marginTop: "-2%", textAlign: "center"}}>"AI-Powered Predictions: From College Fields to NFL Legends."</h3>

      <div style={{marginLeft: "30%", marginRight: "30%"}}>
        <SearchBar />
      </div>
      
      <div>
        <h2></h2>
      </div>
      
      <div style={{marginLeft: "20%", marginRight: "20%"}}>
        <h3 style={{marginLeft: "3%", marginTop: "4%"}}>Top Players</h3>
        <SortableTable height="28vh" rows={rows} setRows={setRows}/>
      
        <div style={{marginTop: "2%", textAlign: "center"}}>
          <a href="./players" style={{marginLeft: "auto", marginRight: "auto", display:"block"}}>
            <Button variant="outlined" color="neutral">See more entries</Button>
          </a>
        </div>
      </div>
    </div>
    );
}
