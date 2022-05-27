import moment from 'moment';

// eslint-disable-next-line import/prefer-default-export
export const calculateTime = (time) => {
  if (time) {
    const now = moment();
    const utc = now;
    const date = moment(new Date(time).toISOString());
    const minutes = utc.diff(date, 'minutes');
    const hours = utc.diff(date, 'hours');
    const days = utc.diff(date, 'days');
    const weeks = utc.diff(date, 'weeks');
    console.log(days, 'harinih')
    if (days >= 31) {
      return new Date(date).toLocaleDateString();
    }
    if(days < 31 && days > 6) {
      return `${weeks}w ago`;;       
    }
    if(days < 6) {
      return `${days}d ago`      
    }
  }
  return '';
};
