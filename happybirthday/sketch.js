let s = 200, t = 100 , z = 64;
let img_mod ;
let f ;
let m ;
let h ;

function preload(){
    img_mod   = loadImage('assets/imgs/zebra_texture.png') ;

    f = loadFont('assets/fonts/rubik_fax.ttf') ;
    m = loadModel('assets/objs/zebra.obj', true) ;
    h = loadModel('assets/objs/heart.obj', true) ;
}

function setup() {
    createCanvas(333, 333, WEBGL) ;
    noStroke() ;
    textFont(f) ;
    textAlign(CENTER, CENTER) ;
    textSize(64)
}

function draw() {
    background(243,255,217) ;
    
    orbitControl() ;
    
    push() ;
        scale(0.0666) ;
        rotateX(-HALF_PI) ;
        fill(255,0,0) ;
        model(h) ;
    pop() ;

    push() ;
        scale(0.666) ;
        texture(img_mod) ;
        model(m) ;
    pop() ;

    fill(235,52,177) ;

    push() ;
        rotateX(0) ;
        translate(0,0,t) ;
        text('bday\nparty\n31',0,0) ;
    pop() ;

    push() ;
        rotateX(HALF_PI) ;
        translate(0,0,t) ;
        text('27\njuly\n6pm',0,0) ;
    pop() ;

    push() ;
        rotateX(PI) ;
        translate(0,0,t) ;
        text('here:\n47.61779,\n-122.\n3594',0,0) ;
    pop() ;

    push() ;
        rotateX(3*HALF_PI) ;
        translate(0,0,t) ;
        text('no\ngifts',0,0) ;
    pop() ;

    push() ;
        rotateY(HALF_PI) ;
        translate(0,0,t) ;
        text('by\non',0,0) ;
    pop() ;

    push() ;
        rotateY(-HALF_PI) ;
        translate(0,0,t) ;
        text('pizza\n+\ncake',0,0) ;
    pop() ;

}