// 同步的保险类的Hook，只要一个返回了，后面的就不执行了
const { SyncBailHook } = require('tapable')

const hook = new SyncBailHook(['author', 'age'])

hook.tap('监听器1', (name, age) => {
  console.log('监听器1:', name, age)
})
hook.tap('监听器2', (name, age) => {
  console.log('监听器2', name, age)
  return '监听器1返回了'
})
hook.tap('监听器3', (name, age) => {
  console.log('监听器3', name, age)
})

hook.call('wangsanshao', 18)