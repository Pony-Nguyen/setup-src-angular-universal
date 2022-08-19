const intervals = [
  { label: 'năm', seconds: 31536000 },
  { label: 'tháng', seconds: 2592000 },
  { label: 'ngày', seconds: 86400 },
  { label: 'giờ', seconds: 3600 },
  { label: 'phút', seconds: 60 },
  { label: 'giây', seconds: 1 },
];
// const intervals = [
//   { label: 'year', seconds: 31536000 },
//   { label: 'month', seconds: 2592000 },
//   { label: 'day', seconds: 86400 },
//   { label: 'hour', seconds: 3600 },
//   { label: 'minute', seconds: 60 },
//   { label: 'second', seconds: 1 },
// ];

const timeSince = (date: any) => {
  const temp = Math.floor((Date.now() - date.getTime()) / 1000);
  const seconds = temp > 0 ? temp : 61;
  const interval: any = intervals.find((i) => i.seconds < seconds);
  const count = Math.floor(seconds / interval.seconds);
  return `${count} ${interval.label} trước`;
  // return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`;
};

export default timeSince;
