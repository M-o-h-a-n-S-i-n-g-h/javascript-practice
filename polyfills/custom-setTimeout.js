function customSetTimeout(callback, delay) {
  var startTime = Date.now();

  function check() {
    if (Date.now() > startTime + delay) {
      callback();
    } else {
      requestIdleCallback(check);
    }
  }

  requestIdleCallback(check);
}

customSetTimeout(() => { console.log("Calling delay") }, 2000)