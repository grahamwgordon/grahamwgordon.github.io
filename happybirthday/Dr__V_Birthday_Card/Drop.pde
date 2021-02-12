class Drop {
  PImage disp_img;
  color c;
  float xpos;
  float initialxpos;
  float ypos;
  float xspeed;
  float yspeed;
  float w;
  float l;
  
  Drop(PImage tempdisp_img, color tempC, float tempXpos, float tempYpos, float tempXspeed, float tempYspeed, float tempW, float tempL) {
    disp_img = tempdisp_img;
    c = tempC;
    xpos = tempXpos;
    initialxpos = tempXpos;
    ypos = tempYpos;
    xspeed = tempXspeed;
    yspeed = tempYspeed;
    w = tempW;
    l = tempL;
  }
  
  void display() {
    fill(c);
    noStroke();
    ///rectMode(CENTER);
    ///rect(xpos, ypos, w, l);
    image(disp_img, xpos, ypos);
  }
  
  void fall() {
    xpos = xpos + xspeed;
    if (xpos > width - 108) {
      xspeed = -xspeed;
    }
    if (xpos < 0) {
      xspeed = -xspeed;
    }
    ypos = ypos + yspeed;
    if (ypos > height) {
      ypos = 0;
    }
  }
}
