const timeHelper = require('./managers/_common/time.helper');

console.log("Current Hour (12-hour format):", timeHelper.getHour12());
console.log("Current Week of the Month:", timeHelper.getWeek4());
console.log("Current Time in Minutes since Epoch:", timeHelper.getTimeInMinutes());