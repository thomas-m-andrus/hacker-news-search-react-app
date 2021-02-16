import React, { ReactElement } from 'react';
import { SearchBoxProps } from '@hacker-news-search-react-app/types';
import './search-box.module.scss';
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export function SearchBox(props: SearchBoxProps) {
  return (
    <div className={`search-box`}>
      <Autocomplete
        id="combo-box-demo"
        options={top100Films}
        getOptionLabel={(option) => option}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Combo box" variant="outlined" />
        )}
      />
      <Button className={`search-box__button`} size="large">
        Search
      </Button>
      <div className={`search-box__filter`}>
        <div className={`search-box__filter-label`}>Search</div>
        <Select
          className={`search-box__filter-select search-box_filter-select--type`}
        >
          {[
            { label: 'something', value: 'hey' },
            { label: 'something else', value: 'hey hey' },
            { label: 'something again', value: 'hey hey hey' },
          ].map(
            ({ label, value }): ReactElement => (
              <MenuItem value={value}>{label}</MenuItem>
            )
          )}
        </Select>
        <div className={`search-box__filter-label`}>by</div>
        <Select
          className={`search-box__filter-select search-box_filter-select--rank`}
        >
          {[
            { label: 'something', value: 'hey' },
            { label: 'something else', value: 'hey hey' },
            { label: 'something again', value: 'hey hey hey' },
          ].map(
            ({ label, value }): ReactElement => (
              <MenuItem value={value}>{label}</MenuItem>
            )
          )}
        </Select>
        <div>from</div>
        <Select
          className={`search-box__filter-select search-box_filter-select--time`}
        >
          {[
            { label: 'something', value: 'hey' },
            { label: 'something else', value: 'hey hey' },
            { label: 'something again', value: 'hey hey hey' },
          ].map(
            ({ label, value }): ReactElement => (
              <MenuItem value={value}>{label}</MenuItem>
            )
          )}
        </Select>
      </div>
    </div>
  );
}

const top100Films = ['something', 'something else', 'hey'];

export default SearchBox;
