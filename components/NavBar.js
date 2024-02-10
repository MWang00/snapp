import * as React from 'react';
import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';

const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.background.level1 : '#fff',
  ...theme.typography['body-sm'],
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: 4,
  color: theme.vars.palette.text.secondary,
}));

export function NavBar() {
  return (
    <Grid container spacing={3} sx={{ marginTop: "1%", marginLeft: "2%", marginRight: "2%" }}>
      {/* logo to direct to the landing page */}
      <Grid xs={2} style={{height: '50px'}}>
        <a href={"/"}>
            <img src="https://imgur.com/CfS9Hqy.png" alt="TEAMNAME" />
        </a>
      </Grid>
    
      {/* icon to direct to table page */}
      <Grid xs={1} style={{height: '50px'}}>
        <Item>TABLE</Item>
      </Grid>

      {/* padding */}
      <Grid xs />

      {/* Search */}
      <Grid xs={3} style={{height: '50px'}}>
        <Item>xs</Item>
      </Grid>
    </Grid>
  );
}