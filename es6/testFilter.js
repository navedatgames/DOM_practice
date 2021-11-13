let arr = [1,2,3,4,5,6,7,8,9,10]

console.log(myFilter(arr,check))

function myFilter(arr,check){
    let ans = [];

    for(let i =0;i<arr.length;i++){
        if(!check(arr[i]))   ans.push(arr[i])
    }
    return ans;
}

function check(val){
    return val%2==0;
}