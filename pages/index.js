import * as React from 'react';
import { useState } from 'react';
import { SortableTable } from '../components/SortableTable';
import {LinearGradient} from "react-text-gradients"

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
    <div style={{width: "90%", marginLeft: "5%", textAlign: "center" }}>
      <h1><LinearGradient gradient={["to right", "#f54242 ,#b50b02"]}>Player</LinearGradient> Rankings</h1>
      <SortableTable />
    </div>
  );
}
