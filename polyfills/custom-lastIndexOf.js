function customLastIndexOf(searchElement) {
  if (this == null || this === undefined) {
    throw new TypeError('Array.prototype.customLastIndexOf is called on null and undefined')
  }

  let thisValue = this

  if (thisValue.length === 0) return -1

  if (
    Object.prototype.toString.call(thisValue) === '[object Object]' &&
    thisValue['length'] !== undefined
  ) {
    thisValue = Object.entries(thisValue)
      .map(([key, value]) => {
        if (key !== 'length') return value
      })
      .filter(Boolean)
  }

  let fromIndex = parseInt(arguments[1]) || thisValue.length - 1

  if (fromIndex < 0 && Math.abs(fromIndex) > thisValue.length) return -1

  if (fromIndex < 0 && Math.abs(fromIndex) < thisValue.length) {
    fromIndex = thisValue.length + fromIndex
  }

  for (let i = fromIndex; fromIndex >= 0; i--) {
    if (thisValue[i] === undefined) return -1

    if (thisValue[i] === searchElement) return i
  }

  return -1
}

Array.prototype.customLastIndexOf = customLastIndexOf
const arr = [1, 2, 3, 12, 13, 8]
console.log(arr.customLastIndexOf(3))
