const formatDate = timeInSeconds => {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor(timeInSeconds % 3600 / 60);
  const seconds = Math.floor(timeInSeconds % 3600 % 60);

  let time;
  let showHours;
  let showMinutes;

  if(hours > 0) {
    showHours = `${hours}h`;
  }

  if (minutes > 0) {
    showMinutes = `${minutes}h`;
  }

  if (hours < 1 && minutes < 1) {
    time = `${seconds}s`;
  }

  return `${time}`;
}

module.exports = formatDate;
