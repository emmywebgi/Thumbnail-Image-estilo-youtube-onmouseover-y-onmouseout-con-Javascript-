const thumbnailh = document.getElementById("thumbnailh");
const play = document.getElementById("play");
const time = document.getElementById("time");

thumbnailh.onmouseover = function(){
    time.style.transform = "scale(1)";
    play.style.transform = "scale(1)";
}
thumbnailh.onmouseout = function(){
    time.style.transform = "scale(0)";
    play.style.transform = "scale(0)";
}