import * as React from 'react';
import { useState } from 'react';
import { SortableTable } from '../components/SortableTable';
import { NavBar } from '../components/NavBar';
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

  return (<div>
    <a href="./players">link to players table</a>
  </div>
  );
}
