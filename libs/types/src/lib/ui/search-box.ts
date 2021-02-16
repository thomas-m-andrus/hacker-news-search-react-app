export enum FilterType {
  TYPE = 'type',
  TIME = 'time',
  RANK = 'rank',
}

export type FilterOption = {
  label: string;
  type: FilterType;
  options: { label: string; value: string }[];
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
export interface SearchBoxProps {
  autoCompleteOptions: string[];
  filters: [FilterOptionType, FilterOptionRank, FilterOptionTime];
}
