// Flatten an array
const arr = [1, 2, [3, 4], [5, [6, 7, [8, 9, 10]]], 11, 12, 13]

const flattenArrayWithoutDepth = (arr, out = []) => {
  if (arr.length === 0) return out

  for (let el of arr) {
    if (typeof el === 'number') {
      out.push(el)
    } else if (Array.isArray(el)) {
      flattenArray(el, out)
    }
  }

  return out
}

// [1,[2,[3,4,5,[6,{hello:"world"},"hello"]]]]
const flattenArray = (input, level, output = []) => {
  if (level === 0) {
    return [...output, ...input]
  }

  if (input.length === 0) {
    return output
  }

  for (let arrEl of input) {
    if (Array.isArray(arrEl)) {
      if (level !== 0) {
        level -= 1
        return flattenArray(arrEl, level, output)
      }
    } else {
      output.push(arrEl)
    }
  }

  return output
}

const input = [1, [2, [3, 4, 5, [6, { hello: 'world' }, 'hello']]]]

const output = flattenArray(arr, [])
console.log(output)
