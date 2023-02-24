const person = {
  name: 'Mohan',
  update: {
    job: 'Software developer',
    org: 'KeepWorks'
  },
  age: '21'
}

function deepClone(obj) {
  const cloned = {}

  if (typeof obj !== 'object') {
    return obj
  }

  for (let key in obj) {
    cloned[key] = deepClone(obj[key])
  }

  return cloned
}

const res = deepClone(person)
res.update.org = 'shopse'

console.log(res, 'result')
console.log(person, 'person')
