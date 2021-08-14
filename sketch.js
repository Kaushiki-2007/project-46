 var pc;
 
 var PLAY=1;
 var END=2;
 var WAIT=0;

 var gameState=PLAY;

 var ironMan;
  var blackWidow;
  var captainAmerica;

  var ultron;
var robots;

var rareItems;

var ironManImg
var blackWidowImg;
var captainAmericaImg;

var ultronImg;
var robotsImg;

var rareItemsImg;

var npcG


function preload(){



}

function setup() {

createCanvas(800,400);

pc=createSprite(50,370,30,30);

ground=createSprite(400,390,1600,20);

ground.velocityX=-3;

npcG=new Group();

}

function draw() {
 background("black");

if (gameState===PLAY){

if(ground.x<0){

ground.x=ground.width/2;

}



enemy();

if(keyDown("UP_ARROW")&& pc.y>335){

//pc.velocityX=0;
pc.velocityY=-8;

}

console.log(pc.y)

if(keyDown("DOWN_ARROW")){

  //pc.velocityX=0;
  pc.y=pc.y+4;
  
  }

  if(keyDown("RIGHT_ARROW")){

   // pc.velocityY=0;
    pc.x=pc.x+4;
    
    }

    if(keyDown("LEFT_ARROW")){

      pc.velocityY=0;
      pc.x=pc.x-4;
    }


    pc.velocityY=pc.velocityY+0.6;
      pc.collide(ground);

if(npcG.isTouching(pc) ){
gameState=END;

}
    }
else if(gameState===END){



}
    
  drawSprites();
}

function enemy(){

if(frameCount%100===0){

 var npc=createSprite(750,370,30,30);

  npc.velocityX=-2;

npcG.add(npc)

}
}


  
  
  




