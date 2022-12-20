function customIncludes(searchElement) {
  if (this.length === 0) return false;
  
  if (this === null || this === undefined) {
    throw new TypeError('Array.prototype.customIncludes called on null or undefined');
  }
  
  if (!Array.isArray(this)) {
    throw new TypeError('Cannot call on non-array objects')
  }
  
  for (const element of this) {
    if (element === searchElement) return true;
    if (element !== element && searchElement !== searchElement) return true;
  }
  
  return false;
}

Array.prototype.customIncludes = customIncludes;
const arr = [1, 2, 3, 7, NaN];
console.log(arr.customIncludes("w"));
