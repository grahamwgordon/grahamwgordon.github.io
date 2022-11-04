var cx, cy, r, t, pt, time_interval, dmax ;

var unit = 40, gstep = 2, noiseScale = 0.009, nsd = 0 ;

var latest_index = 0 ;

let graph_points = [] ;
let drawn_points = [] ;
let deriv_points = [] ;

var done = false ;

function setup() {
    createCanvas(900,400) ;
    noCursor() ;
    textSize(32) ;

    t = 0 ;
    pt = 0 ;
    time_interval = 50 ;
    cx  = 0 ;
    cy = 50 ;
    dmax = gstep * height/2/unit ;

    drawn_points.push([0,height/2]) ;

    noiseSeed(nsd) ;
    _create_new_graph_points() ;
    
}

function draw() {
    // normal gameplay
    if (!done) {
        background(255) ;

        // genius checking
        //point(width/2, mouseY, 20) ;
        
        // draw grid
        strokeWeight(1) ;
        stroke(210,210,250) ;
        for (var i=int(-width/2/unit); i<int(width/2/unit); i++) {
            line(width/2 + i*unit,0,width/2 + i*unit,height) ;
        }
        for (var j=-int(height/2/unit); j<int(height/2/unit); j++) {
            line(0,height/2 + j*unit,width,height/2 + j*unit) ;
        }

        // draw axes
        strokeWeight(2) ;
        stroke(0) ;
        line(0,height/2,width,height/2) ;
        line(width/2,0,width/2,height) ;

        // draw graph_points
        strokeWeight(2) ;
        stroke(0,222,0) ;
        for (var i=1; i<graph_points.length; i++) {
            line(graph_points[i-1][0],graph_points[i-1][1],graph_points[i][0],graph_points[i][1]) ;
        }

        

        // draw drawn_points
        strokeWeight(2) ;
        stroke(222,0,0) ;
        for (var i=1; i<drawn_points.length; i++) {
            line(drawn_points[i-1][0],drawn_points[i-1][1],drawn_points[i][0],drawn_points[i][1]) ;
        }
        strokeWeight(1) ;
        stroke(250,0,250) ;
        line(cx,mouseY,mouseX,mouseY) ;
        line(cx,0,cx,height) ;
        

        // draw cursor
        /*
        strokeWeight(5) ;
        stroke(0,222,0) ;
        point(mouseX,mouseY) ;
        */

        // if done drawing, show score

        // if click, retry
        // (this is handled below)
        
        // if time step happens, 
        t = millis() ;
        if (t - pt >= time_interval) {
            pt = t ;
            cx += gstep ;
            drawn_points.push([cx,mouseY]) ;
            //print(drawn_points[latest_index],graph_points[latest_index],deriv_points[latest_index]) ;
            latest_index++ ;
        }
        

        // reset drawing at the end
        if (cx >= width) {
            //background(222) ;
            //drawn_points = [] ;
            //cx = 0 ;
            done = true ;
        }
    } else {
        // calculate derivative
        _set_deriv_points() ;

        // draw deriv_points
        strokeWeight(2) ;
        stroke(0,0,222) ;
        for (var i=1; i<deriv_points.length; i++) {
            line(deriv_points[i-1][0],deriv_points[i-1][1],deriv_points[i][0],deriv_points[i][1]) ;
        }

        // draw score
        fill(240,240,0) ;
        strokeWeight(2) ;
        stroke(0) ;
        text(str(difference_o_meter()), 10,height-10) ;
        //text("sign score", width/2 + 10, height-10) ;
    }

    
}

function _create_new_graph_points() {
    nsd += int(ceil(millis()/10) * random() ) ;
    noiseSeed(nsd) ;
    graph_points = [] ;
    var current_d = 0 ;
    var current_y = height/2 ;
    for (var i=0; i<width/gstep; i++) {
        current_d = noise(i*noiseScale) ;
        //current_y += current_d ;
        current_y = height/2 + (2*noise(i*noiseScale)-1)*height/2 ;
        graph_points.push([i*gstep, current_y]) ;
    }
}

function _set_deriv_points() {
    deriv_points = [] ;
    deriv_points.push([0,height/2]) ;
    for (var i=1; i<graph_points.length; i++) {
        deriv_points.push([i*gstep,height/2+unit*(graph_points[i][1]-graph_points[i-1][1])/(graph_points[i][0]-graph_points[i-1][0])]) ;
    }
}

function mousePressed() {
    if (done) {
        cx = 0 ;
        drawn_points = [] ;
        drawn_points.push([0,height/2]) ;
        latest_index = 0 ;


        
        _create_new_graph_points() ;
        //_set_deriv_points() ;

        background(222) ;

        done = false ;
    }
}

function difference_o_meter() {
    var tot = 0 ;
    for (var i=0; i<deriv_points.length; i++) {
        tot += (gstep / unit) * abs(drawn_points[i][1] - deriv_points[i][1]) ;
    }
    return tot / (width/unit) ;
}