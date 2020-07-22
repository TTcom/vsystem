export const debounced = (fn, deplay) => {
  let timer
  return function(args) {
    //典型的闭包函数
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.call(this, args) //传入的函数没有this，所以要使用call或apply
    }, deplay)
  }
}
