// Months array
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

// Format the date
module.exports = {
  format_date: (date) => {
    return `${month[date.getMonth()]}, ${new Date(date).getDate()} ${new Date(
      date
    ).getFullYear()}`;
  },
};
