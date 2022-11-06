var arr1=[1,4,2,7,5];
var arr2=[3,8,6,9,0];
var mergedArray=arr1.concat(arr2).sort();
var median=function(){
    var med=mergedArray.length/2;
    console.log(mergedArray[med]);
}
median();