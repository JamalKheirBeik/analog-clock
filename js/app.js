// Run the time fuction every 1 sec
setInterval(setClock, 1000);
// Getting the data attributes to move the hands
const hoursHand = document.querySelector("[data-hours-hand]");
const minutesHand = document.querySelector("[data-minutes-hand]");
const secondsHand = document.querySelector("[data-seconds-hand]");
// Setting the time function
function setClock() {
  // Getting the values
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  // Assigning the rotation ratios
  const secondsRatio = seconds / 60;
  const minutesRatio = (secondsRatio + minutes) / 60;
  const hoursRatio = (minutesRatio + hours) / 12;
  setRotation(secondsHand, secondsRatio);
  setRotation(minutesHand, minutesRatio);
  setRotation(hoursHand, hoursRatio);
}
// Rotation function
function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}
setClock();