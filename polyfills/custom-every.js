function customEvery(callback) {
  if (this === null || this === undefined) {
    return new TypeError(
      'Array.prototype.customEvery is called on null or undefined'
    )
  }
  
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i])) {
      return false;
    }
  }
  
  return true;
}

Array.prototype.customEvery = customEvery;
const arr = [2, 4, 6, 8, 10];
arr.customEvery(element => (element & 1 === 0));
