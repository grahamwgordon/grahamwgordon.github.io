int n = 6 ;
float[] x0 = new float[n] ;
float[] y0 = new float[n] ;
float[] x  = new float[n] ;
float[] y  = new float[n] ;
float theta = float(2)*PI / float(n) ;

void setup() {
  size(500,500) ;
  frameRate(120) ;
  //fullScreen() ;
  background(255) ;
  noCursor() ;
  strokeWeight(2) ;
  for(int i=0; i<=n-1; i = i+1) {
    x[i] = 0 ;
    y[i] = 0 ;
  }
}

void draw() {
  if (mousePressed) {
    background(255) ;
  }
  for(int i=0; i<n; i = i+1) {
    x0[i] = x[i] ;
    y0[i] = y[i] ;
  }
  x[0] = mouseX ;
  y[0] = mouseY ;
  for(int i=1; i<=n-1; i = i+1) {
    x[i] = (x[i-1]-width/2)*cos(theta)-(y[i-1]-height/2)*sin(theta) + width/2 ;
    y[i] = (y[i-1]-height/2)*cos(theta)+(x[i-1]-width/2)*sin(theta) + height/2 ;
  }
  for(int i=0; i<=n-1; i++) {
    stroke(int(255*sin(i*theta)*sin(i*theta)), i*int(255.0/float(n)), 255 - i*int(255.0/float(n))) ;
    line(x0[i],y0[i],x[i],y[i]) ;
  }
}
