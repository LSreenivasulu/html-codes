let p1=document.getElementById("p1");
let p2=document.getElementById("p2");
let p3=document.getElementById("p3");
let p0=document.getElementById("p0");
p1.onclick=function(){
   setInterval(green,2000);
   setTimeout(green,1000);
   setInterval(green1,2000);
   setTimeout(green1,3000);
   setInterval(pk,2000);
   setTimeout(pk,1000);
}
function pk(){
   p0.style.backgroundColor="red";
   p2.style.backgroundColor="gray";
   p3.style.backgroundColor="gray";
}

function green(){
   p2.style.backgroundColor="yellow";
    p0.style.backgroundColor="gray";
   p3.style.backgroundColor="gray";
}
function green1(){
   p3.style.backgroundColor="green";
   p2.style.backgroundColor="gray";
   p0.style.backgroundColor="gray";
}