var arr=[1,2,3,4,5];
var n=arr.length;
var k=1;
var result=[];

var rotate=function(arr,n,k){
    k=k%n;
    for(var i=0;i<n;i++){
        if(i<k){
            result.push(arr[n+i-k]);
        }else{
            result.push(arr[i-k]);
        }
    }
}
rotate(arr,n,k);
console.log(result);