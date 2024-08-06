// 异步的并行的保险类的Hook， 只要其中一个有返回值，后面的就不执行了
const { AsyncParallelBailHook } = require('tapable')

const hook = new AsyncParallelBailHook(['author', 'age'])
console.time('time')

hook.tapAsync('监听器1', (name, age, callback) => {
  console.log('监听器1:', name, age)
  setTimeout(() => {
    callback(null, '监听器1返回')
  }, 1000)
})

hook.tapAsync('监听器2', (name, age, callback) => {
  console.log('监听器2', name, age)
  setTimeout(() => {
    callback()
  }, 1000)
})

hook.tapAsync('监听器3', (name, age, callback) => {
  console.log('监听器3', name, age)
  setTimeout(() => {
    callback(null, '监听器3返回')
  }, 1000)
})

hook.callAsync('wangsanshao', 18, (err, data) => {
  console.log('err', err)
  console.log('data', data)
  console.timeEnd('time')
})