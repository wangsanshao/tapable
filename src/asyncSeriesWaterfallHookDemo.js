const { AsyncSeriesWaterfallHook } = require('tapable')

const hook = new AsyncSeriesWaterfallHook(['name', 'age'])

console.time('time')

hook.tapAsync('监听器1', (name, age, callback) => {
  console.log('监听器1:', name, age)
  setTimeout(() => {
    callback()
  }, 2000)
})

hook.tapAsync('监听器2', (name, age, callback) => {
  console.log('监听器2', name, age)
  callback(null, '监听器2返回值')
})

hook.tapAsync('监听器3', (name, age, callback) => {
  console.log('监听器3', name, age)
  callback(null, '监听器3返回值')
})

hook.callAsync('张三', 18, (err, res) => {
  console.log('err', err)
  console.log('res', res)
  console.timeEnd('time')
})