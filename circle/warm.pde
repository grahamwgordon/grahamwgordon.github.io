float yoff = 0.0, y = 300.0 ;
PImage img ;
PImage[] tree = new PImage[9] ;

void setup() {
  size(800, 500);
  noCursor() ;
  frameRate(40) ;
  imageMode(CENTER) ;
  img     = loadImage("./dolphin.png") ;
  tree[0] = loadImage("./frame_0_delay-0.1s.gif") ;
  tree[1] = loadImage("./frame_1_delay-0.1s.gif") ;
  tree[2] = loadImage("./frame_2_delay-0.1s.gif") ;
  tree[3] = loadImage("./frame_3_delay-0.1s.gif") ;
  tree[4] = loadImage("./frame_4_delay-0.1s.gif") ;
  tree[5] = loadImage("./frame_5_delay-0.1s.gif") ;
  tree[6] = loadImage("./frame_6_delay-0.1s.gif") ;
  tree[7] = loadImage("./frame_7_delay-0.1s.gif") ;
  tree[8] = loadImage("./frame_8_delay-0.1s.gif") ;
}

void draw() {
  // background
  background(#ffe6ff);
  
  // text
  fill(#e69900) ;
  textSize(24) ;
  text("you're invited + 1",        100, 200) ;
  text("dec 1 at 7pm",          150, 240) ;
  text("300 nw 80th st, apt 5", 200, 280) ;
  text("warm beverages",        250, 320) ;
  text("dolphins r so smart",   300, 360) ;
  text("secret word: toenail",  350, 400) ;

  // tree
  image(tree[mouseX % 9],600,100) ; 

  // dolphin
  image(img, mouseX, mouseY) ;
  

  // waves
  fill(#99bfff) ;
  stroke(#99bfff) ;
  beginShape(); 
  
  float xoff = 0 ;
  for (float x = 0; x <= width; x += 20) {
    if (mouseX >= 590 && mouseX <= 610 && mouseY >= 90 && mouseY <= 110) {
      y = map(noise(xoff, yoff), 0, 1, 225,500) ;
    } else {
      y = map(noise(xoff, yoff), 0, 1, 300,400) ;
    }
    vertex(x, y) ; 
    xoff += 0.05 ;
  }
  yoff += 0.01 % 1e10 ;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}
