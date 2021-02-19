import {
  FilterQueryKey,
  SearchBoxProps,
} from '@hacker-news-search-react-app/types';
import { compileQuery, encodeParameters, mapTagToQuery } from './compile-query';

describe('encodeParameters', (): void => {
  it.each`
    input                                                    | expected
    ${{ tag: 'something is happening' }}                     | ${'tag=something%20is%20happening'}
    ${{ tag: 'something is happening', time: '10:20:2020' }} | ${'tag=something%20is%20happening&time=10%3A20%3A2020'}
    ${{ time: '10:20:2020', tag: 'something is happening' }} | ${'time=10%3A20%3A2020&tag=something%20is%20happening'}
    ${{}}                                                    | ${''}
  `(
    `should return $expected when input is $input`,
    ({ input, expected }): void => {
      const result = encodeParameters(input);
      expect(result).toBe(expected);
    }
  );
});
jest
  .spyOn(global.Date, 'now')
  .mockImplementation(() => new Date('2021-02-17T19:07:27.736Z').valueOf());

type Inputs = SearchBoxProps['values'];
type Expected = string;
type CompileQuery = [Inputs, Expected];
const permetations = Object.keys(FilterQueryKey.Rank).reduce(
  (acc, rankKey): CompileQuery[] => {
    const n1 = Object.keys(FilterQueryKey.Tags).reduce(
      (acc2, tagKey): CompileQuery[] => {
        const n2 = Object.keys(FilterQueryKey.Time).reduce(
          (acc3, timeKey): CompileQuery[] => {
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
describe.each(permetations)('compileQuery', (input, expected): void => {
  it(`should return ${expected} when input is ${JSON.stringify(
    input
  )}`, (): void => {
    const result = compileQuery(input);
    expect(result).toBe(expected);
  });
});
