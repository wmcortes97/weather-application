function getTime() {
  let timeInfo = new Date();
  let hour = timeInfo.getHours();
  let minutes = timeInfo.getMinutes();
  let time;

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hour === 12) {
    time = `${hour}:${minutes} PM`;
  } else if (hour > 13) {
    time = `${hour - 12}:${minutes} PM`;
  } else {
    time = `${hour}:${minutes} AM`;
  }
  return time;
}

export { getTime };
