// Get days in year
function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
function getDaysInYear(year) {
  let days = 0;
  
  for(let month = 1; month <= 12; month++) {
    days += daysInMonth(month, year);
  }
  return days;
}
console.log(getDaysInYear(2022));


// Get day of a year
function getDayOfYear(date) {
  const startOfYear = new Date(date.getFullYear(), 0, 0);
  const diff = date - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  return dayOfYear;
}
const date = new Date('2023-02-26');
const dayOfYear = getDayOfYear(date);
console.log(dayOfYear);

// Get fiscal quarters
function getQuarter(date) {
  const month = date.getMonth();
  if (month <= 2) {
    return 1;
  } else if (month <= 5) {
    return 2;
  } else if (month <= 8) {
    return 3;
  } else {
    return 4;
  }
}
const date = new Date('2023-09-28');
const quarter = getQuarter(date);
console.log(quarter);

// Write a function to calculate date diff
function getDateDiff(date1, date2) {
  const diffInMs = Math.abs(date2 - date1);
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60)) % 24;
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60)) % 60;
  const diffInSeconds = Math.floor(diffInMs / 1000) % 60;
  return {
    days: diffInDays,
    hours: diffInHours,
    minutes: diffInMinutes,
    seconds: diffInSeconds
  };
}
const date1 = new Date('2023-02-28T12:00:00');
const date2 = new Date('2023-03-01T15:30:00');
const diff = getDateDiff(date1, date2);
console.log(diff); 

// Create a map
const arr = [
{ id: 1, value: 1, date: "2022-02-15" },
  { id: 2, value: 1242, date: "2023-02-15" },
  { id: 3, value: 3342, date: "2021-02-15" },
];
const createMap = new Map();
createMap.set(1,arr[0]);
createMap.set(2,arr[1]);
createMap.set(3,arr[2]);
console.log(createMap);