objects=[];
status="";

function preload(){
 video= createVideo("video.mp4")
}
 function setup(){
canvas=createCanvas(800,600);
canvas.center();
video.hide();
 }                       
 function start(){
     objectDetector= ml5.objectDetector('cocossd',modelLoaded);
     document.getElementById('status').innerHTML='Status:Detecting Objects';

 }
 function modelLoaded(){
    status=true;
    video.speed(1);
    video.volume(0);
    video.loop();
}
function gotResults(error,results){
    if(error){
        console.log('error');
    }
    objects=results;
}
function draw(){
   image(video,0,0,700,400);

    if(status!=""){
objectDetector.detect(video,gotResults);
for(i=0;i<objects.length;i++){
document.getElementById("status").innerHTML="Status:Objects Detected"
document.getElementById("number_of_objects").innerHTML="Number of Objects Detected are: "+objects.length;
fill("#ff0000")
percent=floor(objects[i].confidence*100);
text(objects[i].label+""+percent+"%",objects[i].x+15,objects[i].y+15);
noFill();
stroke("#ff0000");
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);


}

}

}