function getDate() {
  let dateInfo = new Date();
  let day = week[dateInfo.getDay()];
  let date = dateInfo.getDate();
  let month = months[dateInfo.getMonth()];
  let year = dateInfo.getFullYear();

  return `${day}, ${month} ${date}, ${year}`;
}
export { getDate };
