function createSetInterval() {
  let intervalMap = {}
  let intervalId = 0

  function customSetInterval(callback, interval) {
    intervalId++

    function callIt() {
      intervalMap[intervalId] = setTimeout(() => {
        callback()

        if (intervalMap[intervalId]) {
          callIt()
        }
      }, interval)
    }

    callIt()
    return intervalId
  }

  function customClearSetInterval() {
    clearTimeout(intervalMap[intervalId])
    delete intervalMap[intervalId]
  }

  return {
    customSetInterval,
    customClearSetInterval
  }
}

const { customSetInterval, customClearSetInterval } = createSetInterval()

let id = customSetInterval(log, 500)
let counter = 0

function log() {
  counter++
  console.log('logging it in a interval')
  if (counter >= 5) {
    customClearSetInterval(id)
  }
}
