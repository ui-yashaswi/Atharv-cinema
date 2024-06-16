import moment from "moment-timezone";
export function convertToEndDate(dateString) {
  // Parse input date string into Moment.js object
  const momentDate = moment.utc(dateString);

  // Add one day to the date
  const incrementedDate = momentDate.add(1, "day");

  // Convert to JavaScript Date object and then to ISO string
  const isoDateString = incrementedDate.toDate().toISOString();
  console.log(isoDateString);
  return isoDateString;
}

export function convertUtcToIst(utcDate) {
  const momentDate = moment.utc(utcDate);
  if (!momentDate.isValid()) {
    throw new Error("Invalid date");
  }
  return momentDate
    .utc(utcDate)
    .tz("Asia/Kolkata")
    .format("YYYY-MM-DD HH:mm:ss");
}

export function getRelativeTime(date) {
  return moment(date).fromNow();
}
