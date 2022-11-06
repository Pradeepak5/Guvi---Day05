var arr=[10,9,1,3,5,4];

var primeNumber=function(){
    for(var i=0;i<arr.length;i++){
        var num=arr[i];
        var flag=false;
        for(var j=2;j<=num/2;++j){
            if(num%j==0){
                flag=true;
                break;
            }
        }
        if(!flag){
            console.log(num);
        }
    }
}

primeNumber();