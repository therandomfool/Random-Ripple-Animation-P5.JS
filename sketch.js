let border = 50;

let currRipple1 = 0;
let maxRipple1 = 5;
let x1, y1; 

let currRipple2 = 0;
let maxRipple2 = 6;
let x2, y2; 

let currRipple3 = 0;
let maxRipple3 = 6;
let x3, y3;

let itr = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  x1 = random(border, width-border); 
  y1 = random(border, height-border);
  x2 = random(border, width-border);
  y2 = random(border, height-border);
  x3 = random(border, width-border);
  y3 = random(border, height-border);
  
}

function draw() {
  background(20,9);
  stroke(random(255), random(255), random(255));
  noFill();
  ripples();
  
}

function drawRipples(x,y,interval,maxRipp,currRipp)
{
  if (itr % interval == 0){
    circle(x,y,30+30*currRipp);
    currRipp++;
  }
  return currRipp;
}


function ripples()
{
  currRipple1 = drawRipples(x1,y1, 10, maxRipple1, currRipple1);
  currRipple2 = drawRipples(x2,y2, 20, maxRipple2, currRipple2);
  currRipple3 = drawRipples(x3,y3, 30, maxRipple3, currRipple3);
  
  if(currRipple1 > maxRipple1) 
  {
    x1 = random(border, width-border);
    y1 = random(border, height-border);
    currRipple1 = 0;
  }
  if(currRipple2 > maxRipple2) 
  {
    x2 = random(border, width-border);
    y2 = random(border, height-border);
    currRipple2 = 0;
  }
  if(currRipple3 > maxRipple3) 
  {
    x3 = random(border, width-border);
    y3 = random(border, height-border);
    currRipple3 = 0;
  }
  itr++;
  
}