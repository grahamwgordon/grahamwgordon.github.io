let s = 100 ;
let img_when, img_where, img_what, img_food, img_byob, img_no ;

function preload(){
    img_when  = loadImage('imgs/bday_31_cube_datetime.png') ;
    img_where = loadImage('imgs/bday_31_cube_loc.png') ;
    img_what  = loadImage('imgs/bday_31_cube_party.png') ;
    img_food  = loadImage('imgs/bday_31_cube_food.png') ;
    img_byob  = loadImage('imgs/bday_31_cube_byob.png') ;
    img_no    = loadImage('imgs/bday_31_cube_nogifts.png') ;
}

function setup() {
    createCanvas(666, 666, WEBGL) ;
    noStroke() ;
    noFill() ;
}

function draw() {
    background(220) ;
    
    orbitControl() ;

    push() ;
        rotateX(0) ;
        translate(0,0,s) ;
        texture(img_what) ;
        plane(s,s) 
    pop() ;

    push() ;
        rotateX(HALF_PI) ;
        translate(0,0,s) ;
        texture(img_when) ;
        plane(s,s) ;
    pop() ;

}