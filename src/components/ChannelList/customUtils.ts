import moment from 'moment';

// eslint-disable-next-line import/prefer-default-export

/**
 * @param {String | Date} time
 * @returns {String}
 */
 const format = (time) => {
  if (time === undefined || time === null) throw new Error('Param "time" is not defined or null');

  return moment(time).format('MMM DD, YYYY');
};

export const calculateTime = (time) => {
  if (time) {
    const now = moment();
    const utc = now;
    const date = moment(time);
    const minutes = utc.diff(date, 'minutes');
    const hours = utc.diff(date, 'hours');
    const days = utc.diff(date, 'days');
    const weeks = utc.diff(date, 'weeks');

    if (days >= 30) {
      return format(time);
    }

    if (minutes < 60) {
      if (minutes === 0) {
        return '1m ago';
      }
      return `${minutes}m ago`;
    }
    if (hours < 24) {
      return `${hours}h ago`;
    }

    if (days < 2) {
      return 'Yesterday';
    }

    if (days >= 2 && days <= 6) {
      return `${days}d ago`;
    }

    if (days >= 7 && days <= 13) {
      return '1w ago';
    }

    return `${weeks}w ago`;
  }
  return '';
};
