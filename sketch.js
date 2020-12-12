const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy,thunder;
var maxDrops = 100;
var dropArray = [];
var thunderTime = 0;

function preload(){
    walkingBoy = loadAnimation("walking_8.png","walking_7.png","walking_6.png","walking_5.png","walking_4.png","walking_3.png","walking_2.png","walking_1.png");
    thunderImg_1 = loadImage("1.png");
    thunderImg_2 = loadImage("2.png");
    thunderImg_3 = loadImage("3.png");
    thunderImg_4 = loadImage("4.png");
}

function setup(){
   canvas = createCanvas(800,700);
   engine = Engine.create();
   world = engine.world;
   
   boy = createSprite(400,500,20,20);
   boy.addAnimation("walk",walkingBoy);
   boy.scale = 0.5;

   umbrella1 = new Umbrella(400,500);
   for (let i = 0; i < maxDrops; i++) {
    dropArray.push(new Drop(random(0,800),random(0,700)));
  }
}

function draw(){
    background(0);
    Engine.update(engine);
    umbrella1.display();
    
    for (let a = 0; a < dropArray.length; a++) {
        dropArray[a].display();
        dropArray[a].updatePosition();
      }
      if(frameCount % 120 === 0){
          thunderTime = frameCount;
        thunder = createSprite(400,200);
      var rand = Math.round(random(1,4));
      switch(rand){
          case 1: thunder.addImage("1",thunderImg_1);
          break;
          case 2: thunder.addImage("2",thunderImg_2);
          break;
          case 3: thunder.addImage("3",thunderImg_3);
          break;
          case 4: thunder.addImage("4",thunderImg_4);
          break;
      }
      
    }
    if(thunderTime + 20 === frameCount && thunder){
        thunder.destroy();
    }
    drawSprites();
}   

