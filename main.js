harry_potter="";
peter_pan="";
leftWristY=0;
leftWristX=0;
rightWristX=0;
rightWristY=0;
scoreLeftWrist=0;
song_status1="";
function preload(){
    harry_potter=loadSound("Harry potter.mp3");
    peter_pan=loadSound("music2.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    canvas=image(video,0,0,600,500);
    fill('#FF0000');
    stroke('#FF0000');
    harry_potter.isPlaying();
    if(scoreLeftWrist>0.2){
        circle(leftWristX,leftWristY,20);
        peter_pan.stop();
        if(song_status1==false){
            harry_potter.play();
            document.getElementById("song_name").innerHTML="Song Name= Harry Potter";
        }
    }

}
function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        scoreLeftWrist=results[0].pose.keypoints[9].score;
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX = "+leftWristX+"leftWristY = "+leftWristY);
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX = "+rightWristX+"rightWristY = "+rightWristY);
    }
}