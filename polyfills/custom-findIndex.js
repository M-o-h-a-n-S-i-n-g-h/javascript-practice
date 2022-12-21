function customFindIndex(callback) {
  if (this === null || this === undefined) {
    throw new TypeError('Array.prototype.customFindIndex is called on null and undefined')
  }

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      return i
    }
  }

  return -1
}

Array.prototype.customFindIndex = customFindIndex
const arr = [5, 12, 8, 130, 44]
console.log(arr.customFindIndex((element) => element > 13))
