const clock = document.querySelector("#clock");

function getDate() {
  const curDate = new Date();

  const strHour = `${curDate.getHours()}`.padStart(2, 0);
  const strMin = `${curDate.getMinutes()}`.padStart(2, 0);
  const strSec = `${curDate.getSeconds()}`.padStart(2, 0);
  let curTimeStr = `${strHour} : ${strMin} : ${strSec}`;

  clock.innerText = curTimeStr;
}

getDate();
setInterval(getDate, 1000);
