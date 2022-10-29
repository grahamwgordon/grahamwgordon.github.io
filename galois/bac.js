var cx, cy, r ;
var sth, mth, hth ;
var sr, mr, hr ;
var x,y ;

function setup() {
    createCanvas(400,400) ;
    cx = width/2 ;
    cy = height/2 ;
    r = width/2-10 ;
    sth = -PI/2 ;
    mth = -PI/2 ;
    hth = -PI/2 ;
    sr = r - 20 ;
    mr = r - 40 ;
    hr = r - 80 ;
    x = 10 ;
    y = 10 ;
}

function draw() {
    background(222) ;
    circle(cx,cy,2*r) ;

    // ticks
    for (var i=0; i<60; i++) {
        var theta = TWO_PI * i / 60 ;
        line(cx + (r-5)*cos(theta), cy + (r-5)*sin(theta), cx + r*cos(theta), cy + r*sin(theta)) ;
    }

    strokeWeight(10) ;
    point(x,y) ;

    x++ ;
    y++ ;

    // hands
    line(cx,cy,cx + sr*cos(sth),cy+sr*sin(sth)) ;
    line(cx,cy,cx + mr*cos(mth),cy+mr*sin(mth)) ;
    line(cx,cy,cx + hr*cos(hth),cy+hr*sin(hth)) ;

    delayTime(0.1) ;

    sth += TWO_PI / (5) ;
    mth += TWO_PI / (12*5) ;
    hth += TWO_PI / (12*12*5) ;
}
  