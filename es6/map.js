let arr = [1,2,3,4,5]

function alter(val){
    return val*10;
}

let newArr = arr.map(alter)

console.log(arr)
console.log(newArr)