var cx, cy, r ;
var sth, mth, hth ;
var sr, mr, hr ;

var pt, t ;
var time_interval ;
var adj_th_degs = [0,0,1,1.5,1,1,0,-0.5,-0.95,-1.5,-1.75,-2] ;

function setup() {
    createCanvas(300,300) ;
    cx = width/2 ;
    cy = height/2 ;
    r = width/2-10 ;
    sth = -PI/2 ;
    mth = -PI/2 ;
    hth = -PI/2 ;
    sr = r - 20 ;
    mr = r - 40 ;
    hr = r - 80 ;
    
    pt = 0 ;
    t = 0 ;
    time_interval = 20 ;
}

function draw() {
    background(0) ;
    

    // face
    strokeWeight(1) ;
    
    fill(255) ;
    circle(cx,cy,2*r) ;

    fill(200,200,222) ;
    arc(cx,cy,2*r,2*r,-PI/2,-PI/2 + TWO_PI/5)
    fill(200,222,200) ;
    arc(cx,cy,2*r,2*r,-PI/2+TWO_PI/5,-PI/2 + 2*TWO_PI/5)
    fill(222,200,200) ;
    arc(cx,cy,2*r,2*r,-PI/2 + 2*TWO_PI/5,-PI/2 + 3*TWO_PI/5)
    fill(200,200,222) ;
    arc(cx,cy,2*r,2*r,-PI/2 + 3*TWO_PI/5,-PI/2 + 4*TWO_PI/5)
    fill(200,222,200) ;
    arc(cx,cy,2*r,2*r,-PI/2 + 4*TWO_PI/5,-PI/2 + 5*TWO_PI/5)

    
    

    for (var i=0; i<60; i++) {
        var theta = -PI/2 + TWO_PI * i / 60 ;
        var extra_length = 0 ;
        if (i%5 == 0) {
            strokeWeight(2) ;
            extra_length = 3 ;
        } else {
            strokeWeight(1) ;
        }
        line(cx + (r-5-extra_length)*cos(theta), cy + (r-5-extra_length)*sin(theta), cx + r*cos(theta), cy + r*sin(theta)) ;
    }

    for (var i=0; i<12; i++) {
        var theta = -PI/2 + TWO_PI * (i+1) / 12 ;
        fill(0) ;
        text(str(i+1),cx + (r-23)*cos(theta+PI*adj_th_degs[i]/180), cy + (r-23)*sin(theta+PI*adj_th_degs[i]/180))
    }

    

    

    // hands
    stroke(222,0,0) ;
    strokeWeight(1) ;
    line(cx,cy,cx + sr*cos(sth),cy+sr*sin(sth)) ;
    stroke(0) ;
    strokeWeight(2) ;
    line(cx,cy,cx + mr*cos(mth),cy+mr*sin(mth)) ;
    strokeWeight(4) ;
    line(cx,cy,cx + hr*cos(hth),cy+hr*sin(hth)) ;

    
    t = millis() ;
    if (t - pt >= time_interval) {
        pt = millis() ;
        sth += TWO_PI / (5*60) ;
        mth += TWO_PI / (12*5*60) ;
        hth += TWO_PI / (12*12*5*60) ;
    }
    
}
  