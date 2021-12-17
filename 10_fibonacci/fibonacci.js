const fibonacci = function(num) {
  let n1 = 0
      let n2 = 1
      let i 
      let nextnumb
      const arr = [n1,n2]
  if (num < 0) {
      return "ERROR";
    } else {
      for (i = 0; i <= num-2; i++) {
      nextnumb = n1 + n2
      n1 = n2 
      n2 = nextnumb
      arr.push(nextnumb)
      }
      return nextnumb
      }
     }
fibonacci(6)
fibonacci(4)
fibonacci(6)
fibonacci(10)
fibonacci(15)
fibonacci(25)
fibonacci(-25)
fibonacci("1")
fibonacci("2")
fibonacci("8")




// Do not edit below this line
module.exports = fibonacci;

/* const arr = [1,1,2,3,5]
const lastnumb = http://arr.at(-1)
const beforelast = http://arr.at(-2)
const curr = lastnumb + beforelast
let temp
function makeit(beforelast, lastnumb) {
beforelast = temp
temp = lastnumb
lastnumb = curr
arr.push(curr)
}

    */