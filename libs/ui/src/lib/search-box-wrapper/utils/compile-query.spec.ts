import { compileQuery, encodeParameters, mapTagToQuery } from './compile-query';
import { compileQueryTest1 } from '@hacker-news-search-react-app/mock';
import { FilterQueryKey } from '@hacker-news-search-react-app/types';

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
describe.each(compileQueryTest1)('compileQuery', (input, expected): void => {
  it(`should return ${expected} when input is ${JSON.stringify(
    input
  )}`, (): void => {
    const result = compileQuery(input);
    expect(result).toBe(expected);
  });
});
describe('mapTagToQuery', (): void => {
  it.each`
    input                           | expected
    ${FilterQueryKey.Tags.ALL}      | ${''}
    ${FilterQueryKey.Tags.COMMENTS} | ${'comment'}
    ${FilterQueryKey.Tags.STORIES}  | ${'story'}
  `(
    'should return $expected when input is $input',
    ({ input, expected }): void => {
      const result = mapTagToQuery(input);
      expect(result).toBe(expected);
    }
  );
});
