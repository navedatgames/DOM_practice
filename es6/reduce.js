let arr = [10,2,3];

function mul(a,b){
    return a*b;
}

let newArr = arr.reduce(mul)
console.log(newArr)