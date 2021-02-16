import React, { ReactElement } from 'react';
import { SearchBoxProps } from '@hacker-news-search-react-app/types';
import './search-box.module.scss';
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';
import {
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@material-ui/core';

export function SearchBox({ autoCompleteOptions, filters }: SearchBoxProps) {
  return (
    <div className={`search-box`}>
      <div className={`search-box__input-group`}>
        <Autocomplete
          id="combo-box-demo"
          options={autoCompleteOptions}
          getOptionLabel={(option) => option}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Combo box" variant="outlined" />
          )}
        />
        <Button className={`search-box__button`} size="large">
          Search
        </Button>
      </div>
      <div className={`search-box__filter`}>
        {filters.map(
          ({ label: titleLabel, options, type }): ReactElement => (
            <FormControl>
              <InputLabel id={`${type.toLowerCase()}-select-label`}>
                {titleLabel}
              </InputLabel>
              <Select
                labelId={`${type.toLowerCase()}-select-label`}
                label={titleLabel}
                className={`search-box__filter-select search-box__filter-select--${type}`}
              >
                {options.map(
                  ({ label, value }): ReactElement => (
                    <MenuItem value={value}>{label}</MenuItem>
                  )
                )}
              </Select>
            </FormControl>
          )
        )}
      </div>
    </div>
  );
}

export default SearchBox;
