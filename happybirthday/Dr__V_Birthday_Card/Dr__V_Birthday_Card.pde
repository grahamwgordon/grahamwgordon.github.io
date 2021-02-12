PFont didot;
PImage drV;

Drop myDrop1;
Drop myDrop2;
Drop myDrop3;
Drop myDrop4;
Drop myDrop5;



void setup(){
  size(800, 800);
  noCursor();
  didot = createFont("didot", 34);
  textFont(didot);
  
  drV = loadImage("drv.png");
  
  myDrop1 = new Drop(drV, #A390F2, random(801), 0, random(-200, 201) / 100, random(400, 1001) / 100, 20, 30);
  myDrop2 = new Drop(drV, #E9ACFA, random(801), 0, random(-200, 201) / 100, random(400, 1001) / 100, 20, 30);
  myDrop3 = new Drop(drV, #B2D2FF, random(801), 0, random(-200, 201) / 100, random(400, 1001) / 100, 20, 30);
  myDrop4 = new Drop(drV, #9F5AEA, random(801), 0, random(-200, 201) / 100, random(400, 1001) / 100, 20, 30);
  myDrop5 = new Drop(drV, #5A9AEA, random(801), 0, random(-200, 201) / 100, random(400, 1001) / 100, 20, 30);
}

void draw(){
  background(#CDCEEB);
  ///image(drV2, 0, 0);
  fill(#B2FCFF);
  
  text("Happy Birthday, Dr. V!!!", mouseX, mouseY);
  myDrop1.display();
  myDrop1.fall();
  myDrop2.display();
  myDrop2.fall();
  myDrop3.display();
  myDrop3.fall();
  myDrop4.display();
  myDrop4.fall();
  myDrop5.display();
  myDrop5.fall();
}
