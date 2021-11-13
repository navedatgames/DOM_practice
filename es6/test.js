let arr = [1,2,3,4,5];

console.log(myMap(arr,double))

function myMap(arr,double){
    let ans = []
    for(let i =0;i<arr.length;i++){
       ans.push( (double(arr[i])))
    }
    return ans;
}

function double(val){
    return val*10;
}