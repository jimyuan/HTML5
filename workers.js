onmessage=function(e){
    var value=e.data;

    var m={
        arrToString: function(arr){//数组转化为字符串
            return arr.join(" ");
        },

        getPrime: function(max){//获取max以内的质数
            var num=[];
            var prime=[];
            for(var i=2;i<=max;i++){
                num[i-2]=i;
            }
            for(var i=0;i<num.length;i++){
                if(num[i]===0){continue;}
                var key=num[i];
                prime.push(key);
                this.deleByKey(num,key);    
            }
            return prime;
        },

        deleByKey:function(arr, key){//删除数组内能够被key整除的数
            var len=arr.length;
            for(var i=len-1;i>=0;i--){
                if(arr[i]%key===0){
                    arr[i]=0;
                }
            }
        }
    }

    if(value){
        //获取质数数组
        var startTime=(new Date()).getTime();
        var arr=m.getPrime(parseInt(value));
        var nowTime=(new Date()).getTime();
        var time=(nowTime-startTime)/1000;
        //
        var str=m.arrToString(arr);
        str="<strong>"+value+"</strong> 以内的质数有<strong> "+arr.length+" </strong>个：<var>（计算耗时"+time+"秒）</var><br>"+str;
        //
        postMessage(str)
        //output_dom.innerHTML=str;
      
      }else{
        //output_dom.innerHTML="<var>请输入素数的范围</var>";
        postMessage("<var>请输入素数的范围</var>");
  }
}