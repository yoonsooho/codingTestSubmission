//1.
const factory = function (param) {
  return {
    breadType: param.breadType,
    recipe: param.recipe,
    getInfo() {
      return `
      bredType:${this.breadType}
      recipe 
       flour ${this.recipe.flour}
       water ${this.recipe.water}
       cream ${this.recipe.cream}
      `
    },
  }
}
const data1 = {
  breadType: "cream",
  recipe: {
    flour: 100,
    water: 100,
    cream: 200,
  },
}
const data2 = {
  breadType: "sugar",
  recipe: {
    flour: 100,
    water: 50,
    sugar: 200,
  },
}
const data3 = {
  breadType: "butter",
  recipe: {
    flour: 100,
    water: 100,
    butter: 50,
  },
}
console.log(factory(data1).getInfo())
console.log(factory(data2).getInfo())
console.log(factory(data3).getInfo())
//2.
const result2 = {
  value: 2,

  add(n) {
    this.value += n
    return this
  },

  subtract(n) {
    this.value -= n
    return this
  },
  out() {
    return this.value
  },
}

console.log(result2.add(5).subtract(2).out())

//3.
function result3(n) {
  if (n === 1) {
    return n
  }
  return n * result3(n - 1)
}

console.log(result3(4))

//4.
// 발생원인
// 스택이란 메모리의 스택 영역은 함수의 호출과 관계되는 지역변수, 매개변수, 리턴 값등의 임시데이터를 저장하는 곳을 말한다.

// 따라서 스택 오버플로우란 해당 스택에 해당 변수의 크기가 Stack보다 크거나, 함수를 무한으로 호출하고 있을 때, 혹은 Stack을 넘어가 다른 곳에 위치하고 있는 경우 발생한다.
// 해결방안
//  해당 변수의 크기를 stack보다 작게 만들거나 함수 무한 호출 막기

//5.
let beforeState = []
let state = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1,
  1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1,
  1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0,
]
function result5() {
  for (let a = 0; a < state.length; a++) {
    for (let i = 0; i < state.length; i++) {
      if (
        state[i] <= state[i - Math.floor(state.length) / 10] &&
        state[i] <= state[i + Math.floor(state.length) / 10] &&
        state[i] <= state[i + 1] &&
        state[i] <= state[i - 1] &&
        !state[Math.floor(state.length) / 10] &&
        !state[Math.floor(state.length) / 10] &&
        state[i] !== 0
      ) {
        state[i]++
      }
    }
  }
  return state
}
console.log(result5())
