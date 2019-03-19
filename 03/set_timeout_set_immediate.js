setInterval(function() {
  setTimeout(function() {
      console.log('setTimeout3');
  }, 0);

  setImmediate(function() {
      console.log('setImmediate4');
  });

  console.log('console1');

  process.nextTick(function() {
      console.log('nextTick2');
  });
}, 100)
