setInterval(()=>{

var d=new Date();
var hours= d.getHours();
var minutes=d.getMinutes();
var seconds=d.getSeconds();
var rhours= 30* hours + minutes/2;
var rsecond= 6 * seconds;
var rminute=6* minutes;
document.querySelector("#second").style.transform=`rotate(${rsecond}deg)`;
document.querySelector("#minute").style.transform=`rotate(${rminute}deg)`
document.querySelector("#hour").style.transform=`rotate(${rhours}deg)`


},1000)