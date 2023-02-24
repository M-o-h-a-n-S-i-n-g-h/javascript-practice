// Throttling is a technique in which it limits the execution of a particular function and calls it in given interval, even though the user continuosly triggers the event;

// On the other hand, throttle uses the time delay to execute the callback function at regular intervals until the event trigger is active

function throttle(func, interval) {
  let shoudlTrigger = true;

  return function() {
    if (shoudlTrigger) {
      func();
      shoudlTrigger = false;

      setTimeout(() => {
        shoudlTrigger = true;
      }, interval)
    }
  }
}

