
var shadow;
var shadow_running, backgroundIMG;
var ground;

function preload(){

  shadow_running = loadAnimation("images/Ninja running1.png", "images/Ninja running2.png", "images/Ninja running3.png", "images/Ninja running4.png", "images/Ninja running5.png", "images/Ninja running6.png");
  backgroundIMG = loadImage("images/background.jpg");

}


function setup() {
  var canvas = createCanvas(windowWidth,windowHeight);

  shadow = createSprite(100, 650, 20, 20);
  shadow.addAnimation("running", shadow_running);
  shadow.scale = 1.5;
 
  ground = createSprite(width/2, displayHeight-160, width, 20);
  ground.velocityX = -3;
  ground.shapecolor = "black";

  obstacleGroup = new Group();



} 

function draw() {
  background(backgroundIMG);  
  if(ground.x < 0){
    ground.x = ground.width/2;
  }

  spawnObstacle();
  drawSprites();
}

function spawnObstacle(){
  if(frameCount%150 === 0){
    var obstacle = createSprite(width, height-200, 10, 10);
    obstacle.velocityX = -3;
    obstacle.shapeColor = "red";
    obstacle.lifetime = 500;
    obstacleGroup.add(obstacle);
  }
}

