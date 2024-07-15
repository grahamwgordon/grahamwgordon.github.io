let s = 200, t = 100 , z = 64;
let img_when, img_where, img_what, img_food, img_byob, img_no ;
let f ;
let m ;

function preload(){
    img_when  = loadImage('imgs/bday_31_cube_datetime.png') ;
    img_where = loadImage('imgs/bday_31_cube_loc.png') ;
    img_what  = loadImage('imgs/bday_31_cube_party.png') ;
    img_food  = loadImage('imgs/bday_31_cube_food.png') ;
    img_byob  = loadImage('imgs/bday_31_cube_byob.png') ;
    img_no    = loadImage('imgs/bday_31_cube_nogifts.png') ;

    f = loadFont('rubik_fax.ttf') ;
    m = loadModel('zebra.obj') ;
}

function setup() {
    createCanvas(333, 333, WEBGL) ;
    noStroke() ;
    fill(0) ;
    textFont(f) ;
    textAlign(CENTER, CENTER) ;
    textSize(64)
}

function draw() {
    background(220) ;
    
    orbitControl() ;
    
    push() ;
        scale(3) ;
        model(m) ;
    pop() ;

    push() ;
        rotateX(0) ;
        translate(0,0,t) ;
        //texture(img_what) ;
        text('howdy!',0,0) ;
        //plane(s,s) ;
    pop() ;

    push() ;
        rotateX(HALF_PI) ;
        translate(0,0,t) ;
        texture(img_when) ;
        plane(s,s) ;
    pop() ;

    push() ;
        rotateX(PI) ;
        translate(0,0,t) ;
        texture(img_where) ;
        plane(s,s) ;
    pop() ;

    push() ;
        rotateX(3*HALF_PI) ;
        translate(0,0,t) ;
        texture(img_no) ;
        plane(s,s) ;
    pop() ;

    push() ;
        rotateY(HALF_PI) ;
        translate(0,0,t) ;
        texture(img_byob) ;
        plane(s,s) ;
    pop() ;

    push() ;
        rotateY(-HALF_PI) ;
        translate(0,0,t) ;
        texture(img_food) ;
        plane(s,s) ;
    pop() ;

}