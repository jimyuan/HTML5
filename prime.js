function arrToString(arr){//数组转化为字符串
        return arr.join(" ");
    }
function getPrime(max){//获取max以内的质数
    var num=[];
    var prime=[];
    for(var i=2;i<=max;i++){
        num[i-2]=i;
    }
    for(var i=0;i<num.length;i++){
        if(num[i]===0){continue;}
        var key=num[i];
        prime.push(key);
        deleByKey(num,key);    
    }
    return prime;
}
function deleByKey(arr,key){//删除数组内能够被key整除的数
    var len=arr.length;
    for(var i=len-1;i>=0;i--){
        if(arr[i]%key===0){
            arr[i]=0;
        }
    }
}