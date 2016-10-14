var d, h, m, s, clock, clr;
function clocky(){
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
if(h <= 9){
    h = '0' + h;
}
if(m <= 9){
    m = '0' + m;
}
if(s <= 9){
    s = '0' + s;
}

clock   = h + ':' + m + ':' + s;
    clr = "#" + h + m + s;
clockDisplay = document.getElementById('clock');
clockDisplay.innerHTML = clock;
document.body.style.background = clr;
setTimeout(clocky, 1000);
}
clocky();