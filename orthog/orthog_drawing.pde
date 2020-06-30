int n = 200 , count = 0;
float[] x, y ;
float cx, cy ;
float t , pt , dt ;
float lt, plt, dlt ;
float[] ox, oy, pox, poy , ppox, ppoy;
float min_dist, dist ;
int min_ind = 0 ;
float len = 0.5, epsilon = 2 ;
float[] theta, ptheta ;
float sign = 1 ;
boolean lt_boo = false ;

void setup() {
  size(800,600) ;
  noCursor() ;
  background(200) ;
  strokeWeight(2) ;
  //
  x = new float[n] ;
  y = new float[n] ;
  cx = mouseX ;
  cy = mouseY ;
  t = millis() ;
  lt = millis() ;
  pt = 0 ;
  plt = 0 ;
  dt = 50 ;
  dlt = 200 ;
  ox = new float[2] ;
  oy = new float[2] ;
  pox = new float[2] ;
  poy = new float[2] ;
  ppox = new float[2] ;
  ppoy = new float[2] ;
  pox[0] = width/2 ;
  pox[1] = pox[0] ;
  poy[0] = height/2 ;
  poy[1] = poy[0] ;
  ppox[0] = pox[0] ;
  ppox[1] = ppox[0] ;
  ppoy[0] = poy[0] ;
  ppoy[1] = ppoy[0] ;
  min_dist = 1000000 ;
  theta = new float[2] ;
  ptheta = new float[2] ;
  //
  //
}

void draw() {
  t = millis() ;
  lt = millis() ;
  
  if (t-pt >= dt && count < n) {
    
    cx = mouseX ;
    cy = mouseY ;
    
    if (count == 0) {
      
      x[count] = cx ;
      y[count] = cy ;
      
      if (x[0] != 0 && y[0] != 0) {
        count++ ;
      }
      
    } else if (distance(cx,cy,x[count-1],y[count-1]) > epsilon) {
      
      x[count] = cx ;
      y[count] = cy ;
      
      stroke(100,50,150) ;
      strokeWeight(2) ;
      line(x[count-1],y[count-1],x[count],y[count]) ;
      
      count++ ;
    }
      
    pt = t ;
  } // end if (t-pt > dt)
  
  if (count > 0) {
    
    for (int j=0; j<2; j++) {
  
      min_dist = 1000000000. ;
      for (int i=0; i<count; i++) {
        dist = distance(pox[j],poy[j],x[i],y[i]) ; 
        if (dist < min_dist) {
          min_ind = i ;
          min_dist = dist ;
        }
      } // end distance arg_min
      
      if (min_ind > 0) {
        theta[j] = lerp(ptheta[j], atan2(y[min_ind] - y[min_ind-1],x[min_ind] - x[min_ind-1]), 0.04) ;
      } else {
        theta[j] = lerp(ptheta[j], atan2(y[min_ind+1] - y[min_ind],x[min_ind+1] - x[min_ind]), 0.04) ;
      } // end theta calculation
      
      if (j==0) {
        sign = 1 ;
      } else {
        sign = -1 ;
      }
      
      // some dot product condition
      
      if (dotProd(pox[j]-ppox[j], poy[j]-ppoy[j], -sign*sin(theta[j]), sign*cos(theta[j])) < 0) {
        theta[j] = lerp(theta[j], PI + theta[j], 0.15) ;
      }
      
      
      ptheta[j] = theta[j] ;
      
      
      
      ox[j] = pox[j] - sign*len*sin(theta[j]) ;
      oy[j] = poy[j] + sign*len*cos(theta[j]) ;
      
      stroke(150,100 + sign*75,100) ;
      strokeWeight(2) ;
      line(pox[j],poy[j],ox[j],oy[j]) ;
      
      // draw a pointer to the nearest point
      
      if (lt - plt >= dlt) {
        stroke(255,50) ;
        strokeWeight(1) ;
        line(ox[j],oy[j],x[min_ind],y[min_ind]) ;
        lt_boo = true ;
      }
      
      ppox[j] = pox[j] ;
      ppoy[j] = poy[j] ;
      
      pox[j] = ox[j] ;
      poy[j] = oy[j] ;
      
    } // end for loop over the two orthog. lines
    if (lt_boo) {
      plt = lt ;
      lt_boo = false ;
    }
    
  } // draw the orthog. line (if count > 0)
  
  
  
} // end draw()

float distance(float ax, float ay, float bx, float by) {
  return sqrt(sq(bx - ax) + sq(by - ay)) ;
}

float dotProd(float ax, float ay, float bx, float by) {
  return ax*bx + ay*by ;
}

void mousePressed() {
  count = 0 ;
  pox[0] = width/2 ;
  pox[1] = pox[0] ;
  poy[0] = height/2 ;
  poy[1] = poy[0] ;
  ppox[0] = pox[0] ;
  ppox[1] = ppox[0] ;
  ppoy[0] = poy[0] ;
  ppoy[1] = ppoy[0] ;
  ox[0] = pox[0] ;
  ox[1] = pox[1] ;
  oy[0] = poy[0] ;
  oy[1] = poy[1] ;
  background(200) ;
}
