var findOdd=[1,2,3,4,5,6];

var arrowResult=()=>{
    findOdd.forEach(number => {
        if(number%2!=0){
            console.log(number);
        }
    })
}
arrowResult();