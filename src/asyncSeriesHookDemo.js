// 异步的串行的Hook，等上一个执行完才会接着执行下一个。
const { AsyncSeriesHook } = require('tapable')

const hook = new AsyncSeriesHook(['author', 'age'])

console.time('time')

hook.tapAsync('监听器1', (name, age, callback) => {
  console.log('监听器1:', name, age)
  setTimeout(() => {
    callback()
  }, 2000)
})

hook.tapAsync('监听器2', (name, age, callback) => {
  console.log('监听器2', name, age)
  setTimeout(() => {
    callback()
  }, 2000)
})

hook.tapAsync('监听器3', (name, age, callback) => {
  console.log('监听器3', name, age)
  callback()
})

hook.callAsync('张三', 18, () => {
  console.log('执行完成')
  console.timeEnd('time')
})