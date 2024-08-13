// SyncWaterfallHook 是一个同步的、瀑布式类型的 Hook。瀑布类型的钩子就是如果前一个事件函数的结果 result !== undefined，则 result 会作为后一个事件函数的第一个参数（也就是上一个函数的执行结果会成为下一个函数的参数）
const { SyncWaterfallHook } = require('tapable')

const hook = new SyncWaterfallHook(['author', 'age'])

hook.tap('监听器1', (name, age) => {
  console.log('监听器1:', name, age)
  return '监听器1返回值'
})

hook.tap('监听器2', (name, age) => {
  console.log('监听器2', name, age)
})

hook.tap('监听器3', (name, age) => {
  console.log('监听器3', name, age)
})

hook.call('wangsanshao', 18)