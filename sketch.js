var iss, spacecraft, hasDocked
var bg

function preload() {
  bg = loadImage("images/spacebg.jpg");
  iss_png = loadAnimation("images/iss.png");
  sCraft1 = loadAnimation("images/spacecraft1.png");
  sCraft2 = loadAnimation("images/spacecraft2.png");
  sCraft3 = loadAnimation("images/spacecraft3.png");
  sCraft4 = loadAnimation("images/spacecraft4.png");

}

function setup() {
  createCanvas(800,400);
  

}

function draw() {
  background("white");

  background(bg);

  spacecraft = createSprite(400, 200, 50, 50);
  spacecraft.addAnimation("s1", sCraft1);
  spacecraft.scale = 0.2
 

  iss = createSprite(300, 100, 50, 50);
  iss.addAnimation("iss_animation", iss_png);
  iss.scale = 0.5

  if (!hasDocked){
    if (keyDown("left")){
      spacecraft.changeAnimation("s3", sCraft3);
      spacecraft.velocityX = -10
    }
    if (keyDown("right")){
      spacecraft.changeAnimation("s4", sCraft4);
      spacecraft.velocityX = 10
    }
    if (keyDown("up")){
      //spacecraft.addAnimation("s3", sCraft3);
      spacecraft.velocityY = -10
    }
    if (keyDown("down")){
      //spacecraft.addAnimation("s3", sCraft3);
      spacecraft.velocityY = 10
    }
  }

  
  hasDocked = false;

  if (spacecraft.isTouching(iss)){
    text("Docking Successful!", 200, 50);
    fill("cyan");
  }

  drawSprites();
}