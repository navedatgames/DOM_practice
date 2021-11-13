let arr = [10,2,3];
console.log(myReduce(arr,mul))
function myReduce(arr,mul){
    let val  =arr[0]
    for(let i =1;i<arr.length;i++){
        val = mul(val,arr[i])
    }
    return val
}

function mul(a,b){
    return a*b;
}