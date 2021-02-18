import {
  SearchBoxReducer as State,
  Trigger as Action,
  TriggerType as ActionType,
  InputChangeTrigger,
  FilterChangeTrigger,
  InputChangeType,
  SearchBoxState,
} from '@hacker-news-search-react-app/types';

const stateInputStateChange = (
  state: State,
  action: InputChangeTrigger
): State => {
  const isEmpty = action.payload.value === '';
  const displayState = isEmpty
    ? SearchBoxState.BUTTON_DISABLED
    : SearchBoxState.BUTTON_ENABLED;
  return {
    ...state,
    state: displayState,
    values: { ...state.values, input: action.payload.value },
  };
};

const stateFilterStateChange = (
  state: State,
  action: FilterChangeTrigger
): State => {
  return {
    ...state,
    values: { ...state.values, [action.payload.type]: action.payload.value },
  };
};

const SearchBoxReducer = (state: State, action: Action): State => {
  const { type } = action;
  switch (type) {
    case ActionType.CHANGE:
      return (action as InputChangeTrigger | FilterChangeTrigger).payload
        .type === InputChangeType.INPUT
        ? stateInputStateChange(state, action as InputChangeTrigger)
        : stateFilterStateChange(state, action as FilterChangeTrigger);
    default:
      return state;
  }
};

export { SearchBoxReducer };
