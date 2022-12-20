function customIncludes(searchElement) {
  let thisValue = this
  if (thisValue === 0) return false

  if (thisValue === null || thisValue === undefined) {
    throw new TypeError('Array.prototype.customIncludes called on null or undefined')
  }

  if (
    Object.prototype.toString.call(thisValue) === '[object Object]' &&
    thisValue.hasOwnProperty('length')
  ) {
    thisValue = Object.entries(thisValue)
      .map(([key, value]) => {
        if (key !== 'length') return value
      })
      .filter(Boolean)
  } else if (!Array.isArray(thisValue)) {
    throw new TypeError('Cannot call on non-array objects')
  }

  let fromIndex = parseInt(arguments[1]) || 0
  if (fromIndex >= thisValue.length) return false

  if (fromIndex < 0 && Math.abs(fromIndex) < thisValue.length) {
    fromIndex = thisValue.length + fromIndex
  } else {
    fromIndex = 0
  }

  for (let i = fromIndex; i < thisValue.length; i++) {
    if (thisValue[i] === searchElement) return true
    if (thisValue[i] !== thisValue[i] && searchElement !== searchElement) return true
  }

  return false
}

Array.prototype.customIncludes = customIncludes
// const arr = [1, 3, 12, 2, NaN]
// console.log(arr.customIncludes(NaN))
const arr = [1, 3, 12, 2]
console.log(arr.customIncludes(12))
