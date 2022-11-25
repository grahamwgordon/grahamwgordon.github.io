var game_state  ;
var current_player, num_players, chameleon ;
var clue, wrong_clue, possible_clues ;

// game states are
// 0 : "pass & reveal"
// 1 : display
// 2 : ur done

function setup() {
    createCanvas(400,400) ;
    noCursor() ;
    textSize(32) ;

    num_players = 5 ;
    

    possible_clues = ["A1","B1","C1","D1","A2","B2","C2","D2","A3","B3","C3","D3","A4","B4","C4","D4"] ;
    initialize() ;
    
}

function draw() {
    background(100,200,100) ;
    if (game_state == 0) {
        if (current_player == 0) {
            text("click to reveal", 20, height/2) ;
        } else {
            text("pass, then click to reveal", 20, height/2) ;
        }
    } else if (game_state == 1) {
        text ("player: "+str(current_player+1), 20, height/2-50)
        if (current_player == chameleon) {   
            text("clue: "+wrong_clue,20,height/2+50) ;
        } else {
            text("clue: "+clue,20,height/2+50) ;
        }
    } else if (game_state == 2) {
        text("ur done",20,height/2 - 50) ;
        text("click to see chameleon", 20, height/2+50) ;
    } else if (game_state == 3) {
        text("chameleon = player #"+str(chameleon+1), 20, height/2) ;
    }
}

function mousePressed() {
    if (game_state == 0) {
        game_state = 1 ;
    } else if (game_state == 1) {
        current_player += 1 ;
        if (current_player < num_players) {
            game_state = 0 ;
        } else {
            game_state = 2 ;
        }
    } else if (game_state == 2) {
        game_state = 3 ;
    } else if (game_state == 3) {
        initialize() ;
    }
}

function initialize() {
    game_state = 0 ;
    current_player = 0 ;
    clue = random(possible_clues) ;
    wrong_clue = clue ;
    while (wrong_clue == clue) {
        wrong_clue = random(possible_clues) ;
    }
    chameleon = random([0,1,2,3,4]) ;
}

