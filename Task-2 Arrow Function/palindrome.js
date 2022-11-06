function isPalindrome(s){
    let a=s;
    s=s.split("").reverse().join("");
    return s==a;
}
var PalindromeicStrings=(arr)=>{
    let ans=[];
    for(var i=0;i<arr.length;i++){
        if(isPalindrome(arr[i])){
            ans.push(arr[i]);
        }
    }
    return ans;
}
var arr=['mam','hello','madam','hii'];
var s=PalindromeicStrings(arr);

for(var st of s){
    console.log(st," ");
}
