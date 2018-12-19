// 箭头函数使用
// const arrow = function (param) {}
// const arrow = (param) => {}
// const arrow = param => console.log(param)
// const arrow = param => ({param: param})
// const arrow = (param1, param2) => {}
// // {id: 1, movie: xxx}
// const arrow = ({id, movie}) => {
//   console.log(id, movie)
// }

const luke = {
  id: 2,
  say: function () {
    setTimeout(function () {
      console.log('id', this.id)
    }, 50)
  },
  sayWithThis: function () {
    let _this = this
    setTimeout(function () {
      console.log('this id: ',_this.id)
    }, 500)
  },
  sayWithArrow: function () {
    setTimeout(() => {
      console.log('arrow id: ', this.id)
    }, 1500)
  },
  sayWithGlobalArrow: () => {// 这个时候this是全局作用域的this
    setTimeout(() => {
      console.log('global arrow id: ', this.id)
    }, 2000)
  }
}

luke.say()// undefined
luke.sayWithThis()// 2
luke.sayWithArrow()// 2
luke.sayWithGlobalArrow()// undefined
