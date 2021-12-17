const add = function (a,b) {
  let result = a + b
  return result
  }
add(0,0)
add(2,2)
add(2,6)

const subtract = function (a,b) {
  let result = a - b
  return result
  }
subtract(10,4)
  

const sum = function (array) {
  let s = 0;
  for (let i = 0; i < array.length; i++) {
      s += array[i];
  }
  return s
}
sum([7])
sum([7, 11])
sum([1, 3, 5, 7, 9])
sum([])

 const multiply = function (array) {
   let s = 1;
   for (let i = 0; i < array.length; i++) {
        s *= array[i];
    }
    return s
    }
multiply([6, 3])
multiply([2,4,6,8,10,12,14])

const power = function (a, b) {
  let result = Math.pow(a, b)
  return result
  }
power(4,3)

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
