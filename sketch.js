
var fr,mr,r1,r2;

function setup() {
  createCanvas(800,400);
 fr =  createSprite(400, 200, 50, 50);
 mr =  createSprite(400,150,40, 60);
 r1 =  createSprite(300,50, 50, 50);
 r1.velocityY = 5;
 r2 =  createSprite(300,300,40, 60);
 r2.velocityY = -5;
 mr.shapeColor = "red";
 fr.shapeColor = "green";
 r1.shapeColor = "blue";
 fr.debug = true;
 mr.debug = true;
}

function draw() {
  background(0,0,0);  

  mr.x = World.mouseX;
  mr.y = World.mouseY;

  if (r1.x-r2.x<r1.width/2+r2.width/2
    &&r2.x-r1.x<r1.width/2+r2.width/2){
      r1.velocityX = r1.velocityX * (-1);
      r2.velocityX = r2.velocityX * (-1);
    
  }
  
  if (r1.y-r2.y<r1.height/2+r2.height/2
    &&r2.y-r1.y<r1.height/2+r2.height/2){
      r1.velocityY = r1.velocityY * (-1);
      r2.velocityY = r2.velocityY * (-1);
    
  }

if (mr.x - fr.x < mr.width/2+fr.width/2
  &&fr.x-mr.x<mr.width/2+fr.width/2
  &&fr.y-mr.y<mr.height/2+fr.height/2
  &&mr.y-fr.y<mr.height/2+fr.height/2){
  mr.shapeColor = "yellow";
  fr.shapeColor = "yellow";

}
else{
  mr.shapeColor = "red";
  fr.shapeColor = "green";

}




  drawSprites();
}