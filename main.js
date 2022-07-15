status = "";
inputValue = "";

function preload(){

}

function setup(){
    canvas = createCanvas(480, 350);
    canvas.center;
    video = createCapture(VIDEO);
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    inputValue = document.getElementById("input").value;
}

function modelLoaded(){
    console.log("Model Loaded");
    status = true;
}

function draw(){
    image(video, 0, 0, 480, 350);
}