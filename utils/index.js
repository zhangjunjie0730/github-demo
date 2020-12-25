import moment from 'moment';

export const getTimeFromNow = time => {
  return moment(time).fromNow();
};
