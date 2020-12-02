
var ball=document.getElementsByTagName('div')[0];
var down=0,right=0;
ball.style.transform="translate(0px,0px)";
document.onkeydown=function(event){

 var coord=ball.getBoundingClientRect();
 var a=parseInt(ball.style.top);
var key= event.keyCode;
// console.log(a+" "+ball.style.top+"s "+ball.offsetTop+" "+coord.top); 
if(key===40  && coord.bottom<window.innerHeight){
    if(coord.bottom+5<window.innerHeight)
     down=down+5;
     ball.style.transform="translate("+right+"px,"+down+"px)";
}

else if(key==38 && coord.top>0){
    down=down-5;
    ball.style.transform="translate("+right+"px,"+down+"px)";

}

else if(key==39 && coord.right<window.innerWidth){
    if(coord.right+5<window.innerWidth)
    right=right+5;
    ball.style.transform="translate("+right+"px,"+down+"px)";

}
else if(key==37 && coord.left>0){
    right=right-5;
    ball.style.transform="translate("+right+"px,"+down+"px)";

}
}
// up-38 left-37 right-39 down-40
//W-87 A-65 S-83 D-68