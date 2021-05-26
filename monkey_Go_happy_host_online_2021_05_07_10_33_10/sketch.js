var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage ;
var FoodGroup, obstacleGroup;

var PLAY=1
var ENd=0;
var gameState=1;

var score;

function preload(){
   monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(700,350);
  
  monkey = createSprite(80,300,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;

  ground = createSprite(400,350,1600,10);
  
  
  score=0;
  
  
  obstacleGroup=createGroup();
  FoodGroup= new Group();
}


function draw() {
background("lightblue");
  
 if(gameState===1){
       monkey.collide(ground);

    objects();
    food();
    reset();
    survival=Math.round(frameCount/3);
   
   ground.velocityX=-10;
   if(ground.x<0){
     ground.x=ground.width/2;
     
   }
   
   if(keyDown("space")&& monkey.y>=100){
     monkey.velocityY=-12;
     
   }
   monkey.velocityY=monkey.velocityY+0.8;
  console.log("  hello"+" teacher");
   
   if(monkey.isTouching(FoodGroup)){
     score=score+1;
     FoodGroup.destroyEach();
   }
   else if(monkey.isTouching(obstacleGroup)){
    textSize(30);
    stroke("red");
    text("game over",300,300);
    gameState=0;
     

   }

 }
  if(gameState===0){
    monkey.velocity=0;
     FoodGroup.destroyEach();
     obstacleGroup.destroyEach();
    ground.velocityX = 0;
  }

  drawSprites();
  stroke("grey");
  textSize(20);
  strokeWeight(2);
  text(" survival time : "+ survival ,340,40);
  text(" collected banana  : "+score,40,40);   
 
}

function food(){
  if(frameCount%80===0){
    var banana =createSprite(700,Math.round(random(110,230)),20,20);
    banana.addImage(bananaImage);
    banana.velocityX=-10-score/2;
    banana.lifetime=60
    banana.scale=0.1;
    FoodGroup.add(banana);
  }
}
function objects(){
  if(frameCount%180===0){
    var obstacle=createSprite(700,315,20,20)
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.18;
    obstacle.lifetime=60;
    obstacle.velocityX=-10-score/2;
    obstacleGroup.add(obstacle);
  }
}
function reset(){
  
  
}



