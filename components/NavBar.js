import * as React from 'react';
import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';
import { SearchBar } from '../components/SearchBar';

const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.background.level1 : '#fff',
  ...theme.typography['body-sm'],
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: 4,
  color: theme.vars.palette.text.secondary,
}));

export function NavBar({ router }) {
  const handleTableRoute = () => {
    console.log("shit");
    router.push("/players")
  }
  return (
    <Grid container spacing={3} sx={{ marginTop: "1%", marginLeft: "2%", marginRight: "2%" }}>
      {/* logo to direct to the landing page */}
      <Grid xs={2} style={{height: '50px'}}>
        <a href={"/"}>
            <img src="https://media.discordapp.net/attachments/1162065201152139294/1206072179209543690/snapp.png?ex=65daad3f&is=65c8383f&hm=36866481f9d59dce824e06d88b9f48d41f023add4ba90f400f6a31315785b46f&=&format=webp&quality=lossless&width=2268&height=664" alt="SNAPP" />
        </a>
      </Grid>
    
      {/* icon to direct to table page */}
      <Grid xs={1} style={{height: '50px'}}>
        <a href={"/players"}>
          <h3 style={{marginBottom: "15%"}}>Players</h3>
        </a>
      </Grid>

      {/* padding */}
      <Grid xs />

      {/* Search */}
      <SearchBar />
    </Grid>
  );
}