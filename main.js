function preload(){

}
function setup(){
    canvas=createCanvas(500,500);
    video=createCapture(VIDEO);
    video.hide()
    canvas.center()
    tint_color="";
}
function draw(){
    image(video,0,0,500,500)
    tint(tint_color)
}

function filter_tint(){
    tint_color=document.getElementById("boxcolour").value;
}

function take_snapshot(){
    save("picture1.jpeg")
}