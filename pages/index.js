import * as React from 'react';
import { useState } from 'react';
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

export default function Home() {

  // const handleProfileMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  // };
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <div>
      <img style={{ width: "120vh", marginTop: "4%", marginLeft: "auto", marginRight: "auto", display:"block"}} src="https://media.discordapp.net/attachments/1162065201152139294/1206072179209543690/snapp.png?ex=65daad3f&is=65c8383f&hm=36866481f9d59dce824e06d88b9f48d41f023add4ba90f400f6a31315785b46f&=&format=webp&quality=lossless&width=2268&height=664" alt="SNAPP" />
      
      <div style={{marginLeft: "30%", marginRight: "30%"}}>
        <SearchBar />
      </div>
      
      <div>
        <h2></h2>
      </div>
      
      <div style={{marginLeft: "20%", marginRight: "20%"}}>
        <h3 style={{marginLeft: "3%", marginTop: "5%"}}>Top Players</h3>
        <SortableTable height="28vh" number="5"/>
      
        <div style={{marginTop: "2%", textAlign: "center"}}>
          <a href="./players" style={{marginLeft: "auto", marginRight: "auto", display:"block"}}>
            <Button variant="outlined" color="neutral">See more entries</Button>
          </a>
        </div>
      
      </div>
    </div>
    );
}
