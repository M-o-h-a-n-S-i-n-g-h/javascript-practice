// Debouncing will bunch a series of sequential calls to a function into a single call to that function. It ensures that one notification is made for an event that fires multiple times.

function debounce(func, delay) {
  let timerId;

  return function() {
    if (timerId) {
      clearTimeout(timerId);
      return;
    }

    timerId = setTimeout(() => {
      func();
    }, delay)
  }
}

const deboucedFunction = debounce(func, delay);