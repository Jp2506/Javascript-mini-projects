
const Days=document.querySelector("#Days");
const Hours=document.querySelector("#Hours");
const Minutes=document.querySelector("#Minutes");
const Seconds=document.querySelector("#Seconds");

function UpdateTime(){
    /*
1000ms = 1s
60s = 1m
60m = 1hr
24hrs = 1day
*/
const current_year=new Date().getFullYear();
const newyear =new Date(`January 1 ${current_year + 1} 00:00:00`);
currentdate=new Date();
const difference=newyear-currentdate;
const d=(Math.floor(difference/1000/60/60/24));
const h=(Math.floor(difference/1000/60/60%24));
const m=(Math.floor(difference/1000/60%60));
const s=(Math.floor(difference/1000%60));
Days.innerHTML=d<10? '0'+d:d;
Hours.innerHTML=h<10? '0'+h:h;
Minutes.innerHTML=m<10? '0'+m:m;
Seconds.innerHTML=s<10? '0'+s:s;
}
setInterval(UpdateTime,1000);
