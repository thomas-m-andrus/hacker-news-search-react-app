import React from 'react';
import { SearchBoxProps } from '@hacker-news-search-react-app/types';
import './search-box.module.scss';
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';
import Button from '@material-ui/core/Button';

export function SearchBox(props: SearchBoxProps) {
  return (
    <div>
      <Autocomplete
        id="combo-box-demo"
        options={top100Films}
        getOptionLabel={(option) => option}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Combo box" variant="outlined" />
        )}
      />
      <Button size="large">Search</Button>
    </div>
  );
}

const top100Films = ['something', 'something else', 'hey'];

export default SearchBox;
