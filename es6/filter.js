let arr = [1,2,3,4,5,6,7,8,9,10];

function check(val){
    return val%2==0;
}

let newArr = arr.filter(check);

console.log(arr);
console.log(newArr);