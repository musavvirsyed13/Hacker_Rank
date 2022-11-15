//Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Method 1

s = "07:05:45PM";

function timeConversion(s) {
  const [time] = s.split(" ");
  const modifier = s.indexOf("PM");
  let [hours, minutes, seconds] = time.slice(0, 8).split(":");
  if (modifier > -1) {
    // if 07:00PM then add 12 -- 19:00 in 24hours format
    hours = parseInt(hours) + 12;
  }
  if (hours === "12") {
    hours = "00";
  }
  console.log(`${hours}:${minutes}:${seconds}`);
}

timeConversion(s);

// Method 2
s = "07:25:45PM";

function timeConversion(s) {
  const [time] = s.split(" ");
  let [hours, minutes, seconds] = time.slice(0, 8).split(":");
  if (s.indexOf("PM") > -1) {
    hours = parseInt(hours) + 12;
  }
  if (hours === "12") {
    hours = "00";
  }
  console.log(`${hours}:${minutes}:${seconds}`);
}

timeConversion(s);
