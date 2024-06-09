import React from 'react';
import { TextField, Box } from '@mui/material';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <Box my={2}>
      <TextField
        fullWidth
        label="Search"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </Box>
  );
};

export default SearchBar;
