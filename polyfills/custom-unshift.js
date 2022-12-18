function customUnshift() {
  'use strict';
  if (this == null || this === undefined) {
    throw new TypeError('Array.prototype.customUnshift called on null or undefined')
  }
  
  if (!Array.isArray(this)) {
    return false;
  }
  
  const argumentsLength = arguments.length;
  const originalLength = this.length;
  
  for (let i = originalLength - 1; i >= 0; i--) {
    this[i + argumentsLength] = this[i];
  }
  
  for (let i = 0; i < argumentsLength; i++) {
    this[i] = arguments[i];
  }
  
  return this.length;
}

Array.prototype.customUnshift = customUnshift;
const arr = [1, 2, 3];
const ex = [4, 5, 6];
arr.customUnshift.apply({ name: "Mohan", age: 24 }, [1, 2, 3]);
console.log(ex)
