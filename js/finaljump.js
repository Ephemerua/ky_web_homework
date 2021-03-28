
//5秒跳转页面
var b=document.getElementById("box");
b.innerHTML="Well Done!!!  We'll back to homepage in 10 seconds!";
var time=10;
//每隔一秒执行定时器
var timer=setInterval(function(){
    if(time>0){
        time--;
        b.innerHTML="Well Done!!!  We'll back to homepage in "+time+" seconds!";
    }else{//终止定时器
        //alert("跳转页面");
        //open("http://www.baidu.com");
        window.location.href="home.html";
        timer.clearInterval();
    }
},1000);
