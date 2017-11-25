import React from 'react';
import differenceInMinutes from 'date-fns/difference_in_minutes';
import format from 'date-fns/format';
import { TimeAfterPublishPropTypes as propTypes } from '../propTypes';

const TimeAfterPublish = ({ date }) => {
  const difference = differenceInMinutes(Date.now(), new Date(date));
  // TODO: Allow for days, weeks, months, years
  let timeSince = format(Date(date), 'MM-DD-YYYY');
  if (difference < 60) {
    timeSince = `${difference}minutes ago`;
  }
  if (difference < 24 * 60) {
    const hours = Math.floor(difference / 60);
    timeSince = `${hours}hours ago`;
  }
  if (difference < 28 * (24 * 60)) {
    const days = Math.floor(difference / 60 / 24);
    timeSince = `${days} days ago`;
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
