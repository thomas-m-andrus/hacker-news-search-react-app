import { convertToEpochTime, getDateSince } from './date-time-functions';
import { Time } from '@hacker-news-search-react-app/types';

jest
  .spyOn(global.Date, 'now')
  .mockImplementation(() => new Date('2021-02-17T19:07:27.736Z').valueOf());
describe('getDateSince', (): void => {
  it.each`
    input              | expected                                | inputstr                      | resultstr
    ${Time.LAST_24H}   | ${new Date('2021-02-16T19:07:27.736Z')} | ${'2021-02-17T19:07:27.736Z'} | ${'2021-02-16T19:07:27.736Z'}
    ${Time.PAST_WEEK}  | ${new Date('2021-02-10T19:07:27.736Z')} | ${'2021-02-17T19:07:27.736Z'} | ${'2021-02-10T19:07:27.736Z'}
    ${Time.PAST_MONTH} | ${new Date('2021-01-17T19:07:27.736Z')} | ${'2021-02-17T19:07:27.736Z'} | ${'2021-01-17T19:07:27.736Z'}
    ${Time.PAST_YEAR}  | ${new Date('2020-02-17T19:07:27.736Z')} | ${'2021-02-17T19:07:27.736Z'} | ${'2020-02-17T19:07:27.736Z'}
  `(
    `should return $inputstr when the date now is mocked with $resultstr.`,
    ({ input, expected }): void => {
      const result = getDateSince(input);
      expect(result).toEqual(expected);
    }
  );
});
describe('convertToEpochTime', (): void => {
  it(`should return 1613588847 when the date now is mocked with '2021-02-17T19:07:27.736Z'.`, (): void => {
    const input: Date = new Date(Date.now());
    const result = convertToEpochTime(input);
    expect(result).toEqual(1613588847);
  });
});
