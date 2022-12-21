class LocalStorage {
  constructor() {
    this.store = {}
    this.length = 0
  }
  setItem = (...args) => {
    if (!args.length || args.length < 2) {
      throw new TypeError(`
        Failed to execute 'setItem'. 2 argument required, but got ${args.length}.
      `)
    }
    
    const key = args[0]
    const value = args[1]
    if (key === undefined || value === undefined) {
      throw new TypeError('Either key or value is not provided')
    }

    this.store[key] = value
    this.length++
  }

  getItem = (...args) => {
    if (!args.length) {
      throw new TypeError(`Failed to execute 'getItem'. 1 argument required, but only 0 present.`)
    }
    
    const key = args[0]
    if (key === undefined) {
      throw new TypeError('key is not provided')
    }

    if (this.store[key] !== undefined) {
      return this.store[key]
    }

    return null
  }

  removeItem = (...args) => {
    if (!args.length) {
      throw new TypeError(`Failed to execute 'removeItem'. 1 argument required, but only 0 present.`)
    }

    const key = args[0]
    if (this.store[key].hasOwnProperty(key)) {
      delete this.store[key]
      this.length--
    }
  }

  clear = () => {
    this.store = {}
    this.length = 0
  }
}

const localStorage = new LocalStorage()
localStorage.setItem('jwt', 'secret')
localStorage.setItem('mohan', 'singh')
// localStorage.clear()
console.log(localStorage.store)
