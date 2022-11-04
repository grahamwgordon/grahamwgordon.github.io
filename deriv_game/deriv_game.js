var cx, cy, r, t, pt, time_interval, dmax ;

var unit = 40, gstep = 2, noiseScale = 0.009, nsd = 0 ;


var diff_value = 0 ;

let graph_points = [] ;
let drawn_points = [] ;
let deriv_points = [] ;

var done = false ;
var game_state = 4 ;

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

    //noiseSeed(nsd) ;
    //_create_new_graph_points() ;
    
}

function draw() {
    
    // normal gameplay
    if (game_state == 0) {
        background(255) ;

        // genius checking
        //point(width/2, mouseY, 20) ;
        
        // grid 'n' axes
        _draw_grid_and_axes() ;

        // draw graph_points
        _draw_a_graph(graph_points,0,222,0) ;
        
        // draw drawn_points
        _draw_a_graph(drawn_points,222,0,0) ;

        // guide
        _draw_guides() ;
        
        // if time step happens, 
        t = millis() ;
        if (t - pt >= time_interval) {
            pt = t ;
            cx += gstep ;
            drawn_points.push([cx,mouseY]) ;
        }
        
        // reset drawing at the end
        if (cx >= width) {
            //background(255) ;
            //drawn_points = [] ;
            //cx = 0 ;

            // calculate derivative
            _set_deriv_points() ;
            diff_value = difference_o_meter() ;

            // change game state
            game_state += 1 ;
            game_state %= 3 ;
        }
    } else if (game_state == 1) {
        
        // draw deriv_points
        _draw_a_graph(deriv_points,0,0,222) ;

        // draw score
        fill(240,240,0) ;
        strokeWeight(2) ;
        stroke(0) ;
        text(str(diff_value), 10,height-10) ;
        //text("sign score", width/2 + 10, height-10) ;

        
    } else if (game_state == 2) {
        // background
        background(255) ;

        // guides
        _draw_guides() ;

        // grid 'n' axes
        _draw_grid_and_axes() ;

        // draw new graph
        _draw_a_graph(graph_points,0,222,0) ;
    } else if (game_state == 4) {
        background(255) ;
        _draw_grid_and_axes() ;
        _draw_guides() ;
        strokeWeight(0) ;
        fill(0) ;
        text("click to start", 10,50) ;
    }

    // debugging on top layer
    /*
    strokeWeight(0) ;
    fill(0) ;
    text(str(game_state),0,20) ;
    */
    
}

function mousePressed() {
    if (game_state == 0) {
        // do nothing
    } else if (game_state == 1) {
        _create_new_graph_points() ;
        
        cx = 0 ;
        drawn_points = [] ;
        drawn_points.push([0,height/2]) ;

        deriv_points = [] ;
        deriv_points.push([0,height/2]) ;

        game_state += 1 ;
        game_state %= 3 ;

    } else if (game_state == 2) {
        
        //_set_deriv_points() ;

        background(255) ;

        //done = false ;
        game_state += 1 ;
        game_state %= 3 ;
    } else if (game_state == 4) {
        _create_new_graph_points() ;
        game_state += 1 ;
        game_state %= 3 ;
    }
}

function _draw_a_graph(pts,r,g,b) {
    strokeWeight(2) ;
    stroke(r,g,b) ;
    for (var i=1; i<pts.length; i++) {
        line(pts[i-1][0],pts[i-1][1],pts[i][0],pts[i][1]) ;
    }
}

function _draw_grid_and_axes() {
    // draw grid
    strokeWeight(1) ;
    stroke(210,210,250) ;
    for (var i=int(-width/2/unit)-1; i<=int(width/2/unit); i++) {
        line(width/2 + i*unit,0,width/2 + i*unit,height) ;
    }
    for (var j=-int(height/2/unit)-1; j<=int(height/2/unit); j++) {
        line(0,height/2 + j*unit,width,height/2 + j*unit) ;
    }

    // draw axes
    strokeWeight(2) ;
    stroke(0) ;
    line(0,height/2,width,height/2) ;
    line(width/2,0,width/2,height) ;
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

function _draw_guides() {
    // draw guiding line
    strokeWeight(1) ;
    stroke(250,0,250) ;
    line(cx,mouseY,mouseX,mouseY) ;
    line(cx,0,cx,height) ;

    // draw guiding point
    strokeWeight(10) ;
    point(mouseX,mouseY) ;
}

function difference_o_meter() {
    var tot = 0 ;
    for (var i=0; i<deriv_points.length; i++) {
        tot += (gstep / unit) * abs(drawn_points[i][1] - deriv_points[i][1]) ;
    }
    return tot / (width/unit) ;
}