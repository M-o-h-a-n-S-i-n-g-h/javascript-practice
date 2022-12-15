function customPush() {
  const argumentsLength = arguments.length;
  if (argumentsLength === 0) {
    return this.length;
  }

  if (this === null || this === undefined) {
    throw new TypeError('Array.prototype.customPush is called on null or undefined');
  }

  for (let j = 0; j < arguments.length; j++) {
    this[this.length] = arguments[j];
  }

  return this.length;
}

Array.prototype.customPush = customPush

const arr = [1, 2, 3];
arr.customPush(4, 5, 6, null)