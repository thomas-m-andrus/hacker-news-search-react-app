import { addHours, addWeeks, addMonths, addYears } from 'date-fns';
import { Time } from '@hacker-news-search-react-app/types';

export const convertToEpochTime = (dt: Date): number =>
  Math.floor(dt.getTime() / 1000.0);

export const getDateGoingBack = (
  fn: (date: Date | number, amount: number) => Date,
  timeFrame: number
): (() => Date) => {
  return () => fn(Date.now(), -timeFrame);
};
export const getDateSince = (
  when: Time.LAST_24H | Time.PAST_MONTH | Time.PAST_WEEK | Time.PAST_YEAR
): Date => {
  const timeMap: Record<
    Time.LAST_24H | Time.PAST_MONTH | Time.PAST_WEEK | Time.PAST_YEAR,
    () => Date
  > = {
    [Time.LAST_24H]: getDateGoingBack(addHours, 24),
    [Time.PAST_WEEK]: getDateGoingBack(addWeeks, 1),
    [Time.PAST_MONTH]: getDateGoingBack(addMonths, 1),
    [Time.PAST_YEAR]: getDateGoingBack(addYears, 1),
  };
  return timeMap[when]();
};
export const transformTimeKey = (when: Time): string =>
  when === Time.ALL_TIME
    ? ''
    : convertToEpochTime(getDateSince(when)).toString();
