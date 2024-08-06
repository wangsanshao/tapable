// 一个同步的瀑布式类型的Hook，如果前一个事件函数的返回值不为undefined，则将返回值作为参数传递给下一个事件函数
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