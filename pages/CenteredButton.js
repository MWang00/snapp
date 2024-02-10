import React from 'react';
import Button from '@mui/material';



// const useStyles = makeStyles((theme) => ({
//   centerContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh', // Adjust the height as needed
//   },
//   centeredButton: {
//     // Add additional styling for the button if needed
//   },
// }));

// function CenteredButton() {
//   const classes = useStyles();

//   return (
//     <div className={classes.centerContainer}>
//       <Button variant="contained" color="primary" className={classes.centeredButton}>
//         My Centered Button
//       </Button>
//     </div>
//   );
// }


const CenteredButton = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Button variant="contained" color="primary">
        Login
      </Button>
    </div>
  );
}

export default CenteredButton;
