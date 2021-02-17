import React, { ReactElement } from 'react';
import { SearchBoxProps } from '@hacker-news-search-react-app/types';
import './search-box.module.scss';
import { Autocomplete } from '@material-ui/lab';
import {
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  TextField,
} from '@material-ui/core';

export function SearchBox({
  autoCompleteOptions,
  filters,
  show,
  labels,
  values,
}: SearchBoxProps) {
  return (
    <div className={`search-box`}>
      <div className={`search-box__input-group`}>
        {show.autoComplete ? (
          <Autocomplete
            id="combo-box-demo"
            options={autoCompleteOptions}
            getOptionLabel={(option) => option}
            style={{ width: 300 }}
            value={values.input}
            renderInput={(params) => (
              <TextField {...params} label={labels.input} variant="outlined" />
            )}
          />
        ) : (
          <TextField
            style={{ width: 300 }}
            label={labels.input}
            value={values.input}
            variant="outlined"
          ></TextField>
        )}
        <Button className={`search-box__button`} size="large">
          {labels.button.search}
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
                value={values[type]}
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
