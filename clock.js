

const $clock = document.querySelector('#clock');

const clockCheck = () => {
  const now = new Date();

  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  if(hour < 10) hour = '0' + hour;
  if(minute < 10) minute = '0' + minute;
  if(minute < 10) minute = '0' + minute;

  $clock.innerText = `${hour}:${minute}:${second}`;
}

clockCheck();
setInterval(() => {
  clockCheck();
}, 1000);