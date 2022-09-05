function alwaysHungry(arr) {
    for(i=0;i<arr.length;i++){
        if(arr[i]=="food"){
        console.log("yummy");
        }
        else  {   
            console.log("Im Hungry"); 
        }
        
    }

}
   
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


function highPass(arr, cutoff) {
    var filteredArr = [];
    for(i=0;i<arr.length;i++){
        if(arr[i]>cutoff){
            filteredArr.push(arr[i])
        }
    }
    

    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]



function betterThanAverage(arr) {
    var sum = 0;
for(i=0;i<arr.length;i++){
    arrnew=arr[i]+arr[i-1]
}
    var count = 0
    // count how many values are greated than the average
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


function reverse(arr) {
  var y=[];
    for(i=arr.length-1;i>=0;i--){
    y.push(arr[i])
   }
    return y;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]


function betterThanAverage(arr) {
    var sum = 0;
    var avg = 0 ;

    for( var i=0;i<arr.length;i++){
    sum+=arr[i];
     } avg=sum/arr.length
    var count = 0
    for(var x=0;x<arr.length;x++){
        if(arr[x]>avg){
            count+=1;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


function fibonacciArray(n) {
   
    var fibArr = [0, 1];
    for(i=2;i<n ;i++){
        fibArr[i]=fibArr[i-2]+fibArr[i-1];
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]





