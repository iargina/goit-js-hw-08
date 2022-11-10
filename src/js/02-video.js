import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const throttle = require('lodash.throttle');
const saveTime = localStorage.getItem('videoplayer-current-time');

function currentTime(data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
}

player.on('timeupdate', throttle(currentTime, 1000));

function setTime() {
  if (saveTime) {
    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
  }
}
setTime();
