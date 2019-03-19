var fs = require('fs');
var starttime = Date.now();
var endtime = 0;

fs.readFile(__filename, () => {
  endtime = Date.now();
  console.log('finish reading time:',endtime - starttime);
});

var index = 0;

function nextTick () {
  if (index > 1000) return;
  index++;
  console.log('nextTick');
  process.nextTick(nextTick);
}

nextTick();
