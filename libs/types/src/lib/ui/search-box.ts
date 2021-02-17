export enum FilterType {
  TYPE = 'type',
  TIME = 'time',
  RANK = 'rank',
}

export type FilterOptionData = { label: string; value: string };

export type FilterOption = {
  label: string;
  type: FilterType;
  options: FilterOptionData[];
};
export interface FilterOptionType extends FilterOption {
  type: FilterType.TYPE;
}
export interface FilterOptionTime extends FilterOption {
  type: FilterType.TIME;
}
export interface FilterOptionRank extends FilterOption {
  type: FilterType.RANK;
}
export enum TriggerType {
  BUTTON = 'BUTTON',
  CHANGE = 'CHANGE',
}
export enum InputChangeType {
  INPUT = 'INPUT',
}
export const ChangeType = { ...InputChangeType, ...FilterType };
export type ChangeType = typeof ChangeType;

export interface ButtonTrigger {
  type: TriggerType.BUTTON;
}
export interface FilterChangeTrigger {
  type: TriggerType.CHANGE;
  payload: { type: FilterType; value: FilterOptionData['value'] };
}
export interface InputChangeTrigger {
  type: TriggerType.CHANGE;
  payload: { type: InputChangeType.INPUT; value: string };
}
export type Trigger = ButtonTrigger | FilterChangeTrigger | InputChangeTrigger;

export interface SearchBoxProps {
  autoCompleteOptions: string[];
  filters: [FilterOptionType, FilterOptionRank, FilterOptionTime];
  show: { autoComplete: boolean };
  disable: { search: boolean };
  labels: { input: string; button: { search: string } };
  values: Record<FilterType, FilterOptionData['value']> & { input: string };
  trigger: (msg: Trigger) => void;
}
