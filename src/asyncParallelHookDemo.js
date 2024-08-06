const { AsyncParallelHook } = require('tapable')

const hook = new AsyncParallelHook(['author', 'age'])
console.time('time')

hook.tapAsync('监听器1', (name, age, callback) => {
  console.log('监听器1:', name, age)
  setTimeout(() => {
    callback()
  }, 2000)
})

hook.tapAsync('监听器2', (name, age, callback) => {
  console.log('监听器2', name, age)
  callback()
})

hook.tapAsync('监听器3', (name, age, callback) => {
  console.log('监听器3', name, age)
  callback()
})

hook.callAsync('wangsanshao', 18, (error, result) => {
  console.log('done', error, result)
  console.timeEnd('time')
})
