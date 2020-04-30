var radius = 100;
let x,y;
let score=0;
let r,g,b;
function setup() {
  createCanvas(windowWidth,windowHeight);
  r=random(255);
  g=random(255);
  b=random(255);


  x=random(windowWidth);
  y=random(windowHeight);
setInterval(newCircle, 1000);
}

function draw() {
background(200);
fill(r,g,b);
noStroke();
ellipse(x,y,radius*2,radius*2);
fill(255);
text('Score: '+ score,10,20);



}


function mousePressed() {
  let d = dist(mouseX,mouseY,x,y);
  if(d<radius){
    newCircle();
    score++;
  }

}
function newCircle() {
  x=random(windowWidth);
  y=random(windowHeight);
  r = random(255);
g = random(255);
b = random(255);


}
