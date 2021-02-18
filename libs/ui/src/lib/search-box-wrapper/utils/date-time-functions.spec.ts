import {
  convertToEpochTime,
  getDateSince,
  transformTimeKey,
} from './date-time-functions';
import { Time } from '@hacker-news-search-react-app/types';

jest
  .spyOn(global.Date, 'now')
  .mockImplementation(() => new Date('2021-02-17T19:07:27.736Z').valueOf());
describe('getDateSince', (): void => {
  it.each`
    input              | expected                                | resultstr
    ${Time.LAST_24H}   | ${new Date('2021-02-16T19:07:27.736Z')} | ${'2021-02-16T19:07:27.736Z'}
    ${Time.PAST_WEEK}  | ${new Date('2021-02-10T19:07:27.736Z')} | ${'2021-02-10T19:07:27.736Z'}
    ${Time.PAST_MONTH} | ${new Date('2021-01-17T19:07:27.736Z')} | ${'2021-01-17T19:07:27.736Z'}
    ${Time.PAST_YEAR}  | ${new Date('2020-02-17T19:07:27.736Z')} | ${'2020-02-17T19:07:27.736Z'}
  `(
    `should return $resultstr when the date now is mocked with '2021-02-17T19:07:27.736Z'.`,
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
describe('transformTimeKey', (): void => {
  it.each`
    input              | expected        | resultstr
    ${Time.ALL_TIME}   | ${''}           | ${'an empty string'}
    ${Time.PAST_WEEK}  | ${'1612984047'} | ${'1612984047'}
    ${Time.PAST_MONTH} | ${'1610910447'} | ${'1610910447'}
    ${Time.PAST_YEAR}  | ${'1581966447'} | ${'1581966447'}
  `(
    `should return $resultstr when the date now is mocked with '2021-02-17T19:07:27.736Z' and the input is $input.`,
    ({ input, expected }): void => {
      const result = transformTimeKey(input);
      expect(result).toEqual(expected);
    }
  );
});
