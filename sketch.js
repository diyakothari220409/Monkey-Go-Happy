var ground
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
//var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
 bananaImage = loadImage("banana.png");
 obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
//createCanvas(600,200);

ground=createSprite(90,350,620,10);  
ground.velocityX=-4;
ground.x=ground.width/2;
  
monkey=createSprite(90,320,20,40);
monkey.addAnimation("movingmonkey",monkey_running);
monkey.scale =0.1

  
}


function draw() {

background("white");
  
if (ground.x < 0){
    ground.x = ground.width/2;
}  
  
monkey.collide(ground);
  
if(keyDown("space")&& monkey.y >= 145) {
monkey.velocityY = -12;
  }
  
monkey.velocityY = monkey.velocityY + 0.9;
  
drawSprites();
}



  
  





