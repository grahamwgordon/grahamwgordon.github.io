int n ;
float r, l, xp, yp ;
float[] vtx_delta_x, vtx_delta_y ;
float[] refl_pos ;

void setup() {
  size(600, 600);
  //fullScreen() ;
  noCursor() ;
  //frameRate(30) ;
  noFill() ;
  stroke(0) ;
  strokeWeight(2) ;
  //
  n = 50 ;
  //
  l = 50 ;
  r = 70 ;
  xp = mouseX ;
  yp = mouseY ;
  //
  vtx_delta_x = new float[4*n] ;
  vtx_delta_y = new float[4*n] ;
  //
  // go clockwise
  for (int i=0; i<n; i++) {
    // top side
    vtx_delta_x[0*n + i] = -0.5 + float(i)/float(n) ;
    vtx_delta_y[0*n + i] =  0.5 ;
    // right side
    vtx_delta_x[1*n + i] =  0.5 ;
    vtx_delta_y[1*n + i] =  0.5 - float(i)/float(n) ;
    // bottom side
    vtx_delta_x[2*n + i] =  0.5 - float(i)/float(n) ;
    vtx_delta_y[2*n + i] = -0.5 ;
    // left side
    vtx_delta_x[3*n + i] = -0.5 ;
    vtx_delta_y[3*n + i] = -0.5 + float(i)/float(n) ;
  }
  //
  refl_pos = new float[2] ;
  //
}

void draw() {
  // background
  background(255);
  
  // circle
  
  ellipse(width/2, height/2, 2*r, 2*r) ;

  // get position of mouse
  xp = mouseX ;
  yp = mouseY ;
  
  // draw shape centered on mouse
  
  beginShape() ;
  for (int i=0; i<4*n; i++) {
    vertex(xp + l*vtx_delta_x[i], yp + l*vtx_delta_y[i]) ;
  }
  endShape(CLOSE) ;
  
  // draw the altered shape
  beginShape() ;
  for (int i=0; i<4*n; i++) {
    refl_pos = reflected(xp + l*vtx_delta_x[i], yp + l*vtx_delta_y[i], r) ;
    vertex(refl_pos[0], refl_pos[1]) ;
  }
  endShape(CLOSE) ;
  
}

float[] reflected(float ogx, float ogy, float rad) {
  float[] output ;
  output = new float[2] ;
  
  float  gx  =    ogx - width /2 ;
  float  gy  =    ogy - height/2 ;
  float gr2  = sq(gx) + sq(gy) ;
  float mult = sq(rad) / gr2 ;
  
  output[0] = gx * mult + width /2 ;
  output[1] = gy * mult + height/2;
  
  return output ;
}

void keyPressed() {
  if (key == CODED) {
    if (keyCode == UP) {
      r++ ;
    } else if (keyCode == DOWN) {
      r-- ;
    } else if (keyCode == RIGHT) {
      l++ ;
    } else if (keyCode == LEFT) {
      l-- ;
    }
  }
}
