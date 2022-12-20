function customSome(callback) {
  if (this === null || this === undefined) {
    throw new TypeError(
      'Array.prototype.customSome is called on null or undefined'
    )
  }
  
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      return true;
    }
  }
  
  return false;
}

Array.prototype.customSome = customSome;
const arr = [1, 7, 3, 9, 5];
console.log(arr.customSome((element) => element % 2 === 0))
