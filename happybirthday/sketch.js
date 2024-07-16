let s = 200, t = 100 , z = 64;
let img_when, img_where, img_what, img_food, img_byob, img_no, img_mod ;
let f ;
let m ;
let h ;

function preload(){
    img_when  = loadImage('assets/imgs/bday_31_cube_datetime.png') ;
    img_where = loadImage('assets/imgs/bday_31_cube_loc.png') ;
    img_what  = loadImage('assets/imgs/bday_31_cube_party.png') ;
    img_food  = loadImage('assets/imgs/bday_31_cube_food.png') ;
    img_byob  = loadImage('assets/imgs/bday_31_cube_byob.png') ;
    img_no    = loadImage('assets/imgs/bday_31_cube_nogifts.png') ;
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
        //texture(img_what) ;
        //plane(s,s) ;
        text('bday\nparty\n31',0,0) ;
    pop() ;

    push() ;
        rotateX(HALF_PI) ;
        translate(0,0,t) ;
        //texture(img_when) ;
        //plane(s,s) ;
        text('27\njuly\n6pm',0,0) ;
    pop() ;

    push() ;
        rotateX(PI) ;
        translate(0,0,t) ;
        //texture(img_where) ;
        //plane(s,s) ;
        text('here:\n47.61779,\n-122.\n3594',0,0) ;
    pop() ;

    push() ;
        rotateX(3*HALF_PI) ;
        translate(0,0,t) ;
        //texture(img_no) ;
        //plane(s,s) ;
        text('no\ngifts',0,0) ;
    pop() ;

    push() ;
        rotateY(HALF_PI) ;
        translate(0,0,t) ;
        //texture(img_byob) ;
        //plane(s,s) ;
        text('BY\nOB',0,0) ;
    pop() ;

    push() ;
        rotateY(-HALF_PI) ;
        translate(0,0,t) ;
        //texture(img_food) ;
        //plane(s,s) ;
        text('pizza\n+\ncake',0,0) ;
    pop() ;

}