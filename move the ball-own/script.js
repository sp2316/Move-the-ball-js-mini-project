
var ball=document.getElementsByTagName('div')[0];
var down=0,right=0;
document.onkeydown=function(event){

 var coord=ball.getBoundingClientRect();
var key= event.keyCode;
console.log(key); 
if(key===40  && coord.bottom<window.innerHeight){
down+=10;
ball.style.transform="translate("+right+"px,"+down+"px)";
}

else if(key==38 && coord.top>0){
    down=down-10;
    ball.style.transform="translate("+right+"px,"+down+"px)";

}

else if(key==39 && coord.right<window.innerWidth){
    right=right+10;
    ball.style.transform="translate("+right+"px,"+down+"px)";

}
else if(key==37 && coord.left>0){
    right=right-10;
    ball.style.transform="translate("+right+"px,"+down+"px)";

}
}
// up-38 left-37 right-39 down-40
//W-87 A-65 S-83 D-68