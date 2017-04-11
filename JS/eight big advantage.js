var id=function(a){
	return document.getElementById(a);
}
function GO(a){
	id('first').style.display="none";
	id('header').style.display='block';
	id(a).style.display="block";
}
id('header').onclick=function(){
	id('header').style.display='none';
	id('one').style.display="none";
	id('two').style.display="none";
	id('three').style.display="none";
	id('four').style.display="none";
	id('five').style.display="none";
	id('six').style.display="none";
	id('seven').style.display="none";
	id('eight').style.display="none";
	id('first').style.display="block";
}
id('i-m1').onclick=function(){
		GO('one');
}
id('i-m2').onclick=function(){
		GO('two');
}
id('i-m3').onclick=function(){
		GO('three');
}
id('i-m4').onclick=function(){
		GO('four');
}
id('i-m5').onclick=function(){
		GO('five');
}
id('i-m6').onclick=function(){
		GO('six');
}
id('i-m7').onclick=function(){
		GO('seven');
}
id('i-m8').onclick=function(){
		GO('eight');
}
var op = document.getElementById("inim"); 
var stary='',move=0,end=0,lod=0,s=0,o=0,z=0;
function load (){
     
    op.addEventListener('touchstart',touch, false);  
    op.addEventListener('touchmove',touch, false);  
    op.addEventListener('touchend',touch, false);  
       
    function touch (event){  
        var event = event || window.event;  
        switch(event.type){  
            case "touchstart":  
                id('ae').style.display="none";
                stary=event.touches[0].clientX ; 
                 lod=op.style.webkitTransform.slice(8,-4);
                 lod=Number(lod);
                break;  
            case "touchend":
                //o=Number(((s-lod)/45).toFixed());
                o=op.style.webkitTransform.slice(8,-4);
                o=Number(o);
                o=((o/45).toFixed())*45;
                op.style.webkitTransform='rotateZ('+o+'deg)';
                break;
            case "touchmove":  
                event.preventDefault();  
                move=event.touches[0].clientX;
               s=parseInt(((move-stary)/calw)*90);
               s=s+lod;
                op.style.webkitTransform='rotateZ('+s+'deg)';
                break;  
        }  
           
    }  
}
  document.addEventListener("touchmove",function(e){
   if(true){
   e.preventDefault();
   e.stopPropagation();
       }
     },false);
 var time=null,an=id('an');
 function rotate(){
 time=setInterval(function(){
	    an.style.webkitTransform='rotateZ('+z+'deg)';
	    z>360?z-=360:z+=15;
	 },100); 
}
rotate();
id('an').onclick=function(){
var myAudio = document.getElementById('ad');
        if(myAudio.paused){
            myAudio.play();
            rotate();
        }else{
            myAudio.pause();
             clearInterval(time);
        }
   
}
id('ae-3').addEventListener("webkitAnimationEnd", function(){
     id('ae').style.display="none";
}, false);
window.addEventListener('load',load, false);  
window.onload=function(){
	document.getElementById('index').style.display='none';
	id('first').style.display="block";
	id('ae').style.display="block";
};