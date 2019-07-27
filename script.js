function addZero(i){
  if(i < 10){
    i = "0" + i;
  }
  return i;
}

function time() {
  var present = new Date();
  var hour = present.getHours();
  var minutes = present.getMinutes();
  minutes = addZero(minutes);
  
  document.getElementById('digits').innerHTML = hour + ":" + minutes;
};
time();
// Ref: https://stackoverflow.com/questions/18229022/how-to-show-current-time-in-javascript-in-the-format-hhmmss/18229123
