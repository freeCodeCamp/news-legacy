import React from 'react';
import differenceInMinutes from 'date-fns/difference_in_minutes';
import format from 'date-fns/format';
import { TimeAfterPublishPropTypes as propTypes } from '../propTypes';

function pluralise(num, unit) {
  return num !== 1 ? `${unit}s` : unit;
}

const TimeAfterPublish = ({ date }) => {
  const difference = differenceInMinutes(Date.now(), new Date(date));
  // TODO: Allow for days, weeks, months, years
  let timeSince = format(Date(date), 'MM-DD-YYYY');
  if (difference < 60) {
    timeSince = `${difference} ${pluralise(difference, 'minute')} ago`;
  }
  if (difference < 24 * 60) {
    const hours = Math.floor(difference / 60);
    timeSince = `${hours} ${pluralise(hours, 'hour')} ago`;
  }
  if (difference < 28 * (24 * 60)) {
    const days = Math.floor(difference / 60 / 24);
    timeSince = `${days} ${pluralise(days, 'day')} ago`;
  }
  return (
    <span className='since-pub'>
      <time dateTime={date}>{timeSince}</time>
    </span>
  );
};

TimeAfterPublish.displayName = 'TimeAfterPublish';
TimeAfterPublish.propTypes = propTypes;

export default TimeAfterPublish;
