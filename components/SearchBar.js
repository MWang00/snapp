import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/joy/Box';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    router.push({
      pathname: '/players',
      query: { search: searchQuery },
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSearchSubmit}
      sx={{
        py: 2,
        display: 'flex',
        gap: 2,
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Input
        placeholder="Search player"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{ flexGrow: 1 }}
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon />
      </IconButton>
    </Box>
  );
}