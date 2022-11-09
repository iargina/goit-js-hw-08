import Player from '@vimeo/player';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const throttle = require('lodash.throttle');

function currentTime(data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
}

player.on('timeupdate', throttle(currentTime, 1000));
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
