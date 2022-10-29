var cx, cy, r;

function setup() {
  createCanvas(400, 400);
  cx = width/2 ;
  cy = height/2 ;
  r = cx - 10
}

function draw() {
  background(220);
  circle(cx, cy, 2*r) ;
  
  for (int i = 0; i<12; i++) {
    text(str(i+1), )
  }
  
  //delay(1) ;
}