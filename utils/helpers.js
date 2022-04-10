const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

module.exports = {
  format_date: (date) => {
    return `${month[date.getMonth()]}, ${new Date(date).getDate()} ${new Date(
      date
    ).getFullYear()}`;
  },
};
