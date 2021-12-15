const fibonacci = function(index){

    let arr = [1,1];
    
    for (let i = 0; i<index-3; i++){ 
    let last= arr.at(-1); 
    let secondLast = arr.at(-2); 
    let push = last+secondLast; 
    arr.push(push); 
    console.log(arr);
    
    }
    return arr[index-1]; 
    }
    
    fibonacci(4);

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