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
            <img src="https://media.discordapp.net/attachments/672178050388983835/1206046044551651419/snapp.png?ex=65da94e8&is=65c81fe8&hm=525b899879d3228d64d159e1d23f975598ecc9b3a023ac60c78a10b626fed90b&=&format=webp&quality=lossless&width=2268&height=664" alt="TEAMNAME" />
        </a>
      </Grid>
    
      {/* icon to direct to table page */}
      <Grid xs={1} style={{height: '50px'}}>
        <Item onClick={handleTableRoute}>TABLE</Item>
      </Grid>

      {/* padding */}
      <Grid xs />

      {/* Search */}
      <SearchBar />
    </Grid>
  );
}