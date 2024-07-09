function setup() {
    createCanvas(710, 400, WEBGL);
    angleMode(DEGREES);
    strokeWeight(5);
    noFill();
  }
  
  function draw() {
    background(222);
  
    // Call every frame to adjust camera based on mouse/touch
    orbitControl();
  
    box() ;
  }