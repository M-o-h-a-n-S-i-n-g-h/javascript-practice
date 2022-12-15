function customPop() {
  if (this.length === 0) {
    return undefined;
  }

  const poppedElement = this[this.length - 1];
  this.splice(this.length-1, 1);

  // another way of doing it
  // this.length = this.length - 1;

  return poppedElement;
}

Array.prototype.customPop = customPop;

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.customPop())
console.log(arr.customPop())
console.log(arr)