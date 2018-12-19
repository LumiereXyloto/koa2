// 迭代器
// function makeIterator (arr) {
//   let nextIndex = 0

//   // 返回一个迭代器对象
//   return {
//     next: () => {
//       // next() 方法返回的结果对象
//       if (nextIndex < arr.length) {
//         return {
//           value: arr[nextIndex++],
//           done: false
//         }
//       } else {
//         return {
//           done: true
//         }
//       }
//     }
//   }
// }

// const it = makeIterator(['吃饭','代码','睡觉'])

// console.log('首先', it.next().value)
// console.log('其次', it.next().value)
// console.log('然后', it.next().value)
// console.log('最后', it.next().done)


// 借助成成器生成迭代器
function *makeIterator (arr) {
  for (let i = 0; i < arr.length; i++) {
    yield arr[i]// 把当前循环到的值迭代下去
  }
}

const gen = makeIterator(['吃饭','代码','睡觉'])
console.log('首先', gen.next().value)
console.log('其次', gen.next().value)
console.log('然后', gen.next().value)
console.log('最后', gen.next().done)
