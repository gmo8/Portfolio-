let speed = 1;
let x=0;

function setup(){
    createCanvas(windowWidth, windowHeight);
    background(255)
    noStroke();

    for(var i=0; i<100; i++){
        fill(255, 200, 200);
        ellipse(random(0, width), random(0, height), 40, 40);
    }
}

function draw(){
    textAlign(CENTER);
    textSize(60)
    fill(155, 200, 100);
    text("This is My Awesome Sketch!!!!", width/2, height/2)

    

}