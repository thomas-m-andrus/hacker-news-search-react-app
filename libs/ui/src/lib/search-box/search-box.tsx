import React, { ReactElement } from 'react';
import {
  SearchBoxProps,
  InputChangeType,
  TriggerType,
  FilterType,
} from '@hacker-news-search-react-app/types';
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
  trigger,
  disable,
}: SearchBoxProps) {
  const inputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    trigger({
      type: TriggerType.CHANGE,
      payload: { type: InputChangeType.INPUT, value: e.target.value },
    });
  };
  const autoCompleteChange = (
    _: React.ChangeEvent<unknown>,
    newValue: string
  ): void => {
    trigger({
      type: TriggerType.CHANGE,
      payload: { type: InputChangeType.INPUT, value: newValue },
    });
  };
  const filterChange = (
    type: FilterType
  ): ((event: React.ChangeEvent<{ value: string }>) => void) => {
    return (event: React.ChangeEvent<{ value: string }>): void =>
      trigger({
        type: TriggerType.CHANGE,
        payload: { type, value: event.target.value },
      });
  };
  const handleOnClick = () => trigger({ type: TriggerType.BUTTON });
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
            onInputChange={autoCompleteChange}
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
            onChange={inputChange}
            inputProps={{ 'aria-label': labels.input }}
          ></TextField>
        )}
        <Button
          className={`search-box__button`}
          size="large"
          onClick={handleOnClick}
          disabled={disable.search}
        >
          {labels.button.search}
        </Button>
      </div>
      <div className={`search-box__filter`}>
        {filters.map(
          ({ label: titleLabel, options, type }, index): ReactElement => (
            <FormControl key={`${type.toLowerCase()}-select-${index}`}>
              <InputLabel id={`${type.toLowerCase()}-select-label`}>
                {titleLabel}
              </InputLabel>
              <Select
                labelId={`${type.toLowerCase()}-select-label`}
                label={titleLabel}
                className={`search-box__filter-select search-box__filter-select--${type}`}
                value={values[type]}
                onChange={filterChange(type)}
              >
                {options.map(
                  ({ label, value }, index2): ReactElement => (
                    <MenuItem value={value} key={`${label}-${index2}`}>
                      {label}
                    </MenuItem>
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
