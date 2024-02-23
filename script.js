var page1content = document.querySelector("#page1-content")
var cursor = document.querySelector("#cursor")

page1content.addEventListener("mousemove", function(dets) {
    cursor.style.left = dets.x+"px";
    cursor.style.top = dets.y+"px";


})