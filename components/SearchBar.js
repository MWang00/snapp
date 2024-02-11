import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/joy/Box';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    if (onSearch) {
      onSearch(searchQuery); // Execute the search function passed as a prop
    }
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
        onChange={handleSearchChange}
        sx={{ flexGrow: 1 }}
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon />
      </IconButton>
      
    </Box>
  );
}