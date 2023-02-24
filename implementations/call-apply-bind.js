Function.prototype.myCall = function (ctx) {
  ctx.func = this
  return ctx.func()
}

Function.prototype.myApply = function (ctx, args) {
  ctx.func = this
  return ctx.func(...args)
}

Function.prototype.myBind = function (ctx) {
  ctx.func = this
  return function (...args) {
    ctx.func(...args)
  }
}

