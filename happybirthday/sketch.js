let s = 100 ;
let t = 12 ;
let f ;

function preload() {
    f = loadFont('rubik_fax.ttf') ;
}

function setup() {
    createCanvas(710, 400, WEBGL);
    angleMode(DEGREES);
    strokeWeight(1) ;
    fill(250,200,200) ;
    textFont(f) ;
    textSize(t) ;
}
  
function draw() {
    background(222);

    orbitControl();

    box(s) ;

    push() ;
    translate(s,0,0) ;
    text('howdy',0,0) ;
    pop() ;
}