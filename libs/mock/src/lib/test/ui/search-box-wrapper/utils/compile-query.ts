import {
  SearchBoxProps,
  FilterQueryKey,
} from '@hacker-news-search-react-app/types';
type Inputs = SearchBoxProps['values'];
type Expected = string;
type CompileQueryTest1 = [Inputs, Expected];
export const compileQueryTest1 = Object.keys(FilterQueryKey.Rank).reduce(
  (acc, rankKey): CompileQueryTest1[] => {
    const n1 = Object.keys(FilterQueryKey.Tags).reduce(
      (acc2, tagKey): CompileQueryTest1[] => {
        const n2 = Object.keys(FilterQueryKey.Time).reduce(
          (acc3, timeKey): CompileQueryTest1[] => {
            const expectedTime = {
              [FilterQueryKey.Time.ALL_TIME]: '',
              [FilterQueryKey.Time.LAST_24H]:
                '&numericFilters=created_at_i>1613502447',
              [FilterQueryKey.Time.PAST_WEEK]:
                '&numericFilters=created_at_i>1612984047',
              [FilterQueryKey.Time.PAST_MONTH]:
                '&numericFilters=created_at_i>1610910447',
              [FilterQueryKey.Time.PAST_YEAR]:
                '&numericFilters=created_at_i>1581966447',
            }[timeKey];
            const expectedTag = {
              [FilterQueryKey.Tags.ALL]: '',
              [FilterQueryKey.Tags.STORIES]: '&tags=story',
              [FilterQueryKey.Tags.COMMENTS]: '&tags=comment',
            }[tagKey];
            const expected = `http://hn.algolia.com/api/v1/${
              rankKey === 'DATE' ? 'search_by_date' : 'search'
            }?query=something%20grand${expectedTag}${expectedTime}`;
            return [
              ...acc3,
              [
                {
                  input: 'something grand',
                  rank: FilterQueryKey.Rank[rankKey],
                  time: FilterQueryKey.Time[timeKey],
                  type: FilterQueryKey.Tags[tagKey],
                },
                expected,
              ],
            ];
          },
          []
        );
        return [...acc2, ...n2];
      },
      []
    );
    return [...acc, ...n1];
  },
  []
);
