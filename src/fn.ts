const debounce = (fn: () => void, wait: number) => {
  let timer = null
  return function () {
    let context = this
    let args = [].__proto__.slice.call(arguments)
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, wait)
  }
}

const throttle = (fn: () => void, wait: number) => {
  let timer = null
  return function () {
    const context = this
    const args = Array.prototype.slice.call(arguments)
    if(!timer) {
      timer = setTimeout(() => {
        timer = null
        fn.apply(context, args)
      }, wait)
    }
  }
}

export {
  debounce,
  throttle
}