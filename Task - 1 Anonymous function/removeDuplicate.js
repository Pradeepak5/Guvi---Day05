var removeDuplicates=function(arr,n){
    if(n==0||n==1){
        return n;
    }
    var temp=new Array(n);
    var j=0;
    for(var i=0;i<n-1;i++){
        if(arr[i]!=arr[i+1]){
            temp[j++]=arr[i];            
        }
    }
    temp[j++]=arr[n-1];
    for(var i=0;i<j;i++){
        arr[i]=temp[i];
    }
    return j;
}

var arr=[1,1,2,3,3,4,5,5,6];
var n=arr.length;
n=removeDuplicates(arr,n);

for(var i=0;i<n;i++){
    console.log(arr[i]);
}