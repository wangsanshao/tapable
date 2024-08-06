// 同步的循环类的Hook, 不停的循环执行事件函数，直到所有函数结果都返回undefined，不符合条件就掉头重新开始执行
const { SyncLoopHook } = require('tapable')

const hook = new SyncLoopHook([])

let count = 5;

hook.tap('监听器1', () => {
  console.log('监听器1里面的count是：', count);
  if ([1,2,3].includes(count)) {
    return undefined
  } else {
    count--
    return '继续执行1'
  }
})

hook.tap('监听器2', () => {
  console.log('监听器2里面的count是：', count);
  if ([1,2].includes(count)) {
    return undefined
  } else {
    count--
    return '继续执行2'
  }
})

hook.tap('监听器3', () => {
  console.log('监听器3里面的count是：', count);
  if ([1].includes(count)) {
    return undefined
  } else {
    count--
    return '继续执行3'
  }
})

hook.call()