float theta, L, delta ;
int q = 2, n = 6 ;

void setup() {
  size(600,600) ;
  noCursor() ;

  L = 200 ;

  delta = 0 ;
}

void draw() {
  background(220) ;
  theta = TWO_PI * (mouseX - width/2)/width + delta;

  translate(width/2, height/2) ;

  

  strokeWeight(2) ;
  for (int i=0; i<n; i++) {
    if (i == 0) {
      stroke(0, 150, 0) ;
    } else {
      stroke(0) ;
    }
    line(0, 0, L * cos(pow(q, i)*theta), L * sin(pow(q, i)*theta)) ;
  }
  
  
  for (int i=0; i<pow(q,n)-1; i++) {
    stroke(170,110,170) ;
    strokeWeight(5) ;
    if (i % ((pow(q,n)-1) / (pow(q,3)-1)) == 0) {
      stroke(170,0,0) ;
      strokeWeight(7) ;
    }
    if (i % ((pow(q,n)-1) / (pow(q,2)-1)) == 0) {
      stroke(0,0,170) ;
      strokeWeight(7) ;
    }
    if (i % ((pow(q,n)-1) / (pow(q,1)-1)) == 0) {
      stroke(0) ;
      strokeWeight(9) ;
    }
    point(L * cos(TWO_PI *i/(pow(q, n)-1)), L * sin(TWO_PI *i/(pow(q, n)-1))) ;
  }
}

void keyPressed() {
  if (key == CODED) {
    if (keyCode == RIGHT) {
      delta += 0.01 / pow(q,n) ;
    } else if (keyCode == LEFT) {
      delta -= 0.01 / pow(q,n) ;
    }
  }
}
