
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;
//const Constraint=Matter.Constraint;
var car2,carImg,road,roadImg;
var groundImg;
var world;
var ground;
var wall1;


function preload(){
	carImg=loadImage("images/car2.png")
	groundImg=loadImage("images/saar.jpg")
	
}

function setup() {
	createCanvas(1000, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	ground=createSprite(400,350,900,20);
	ground.velocityX=-3;
	ground.addImage(groundImg);
	ground.x=ground.width/2;

	
	//ground.depth=car3.depth
   // car3.depth=car3.depth+1
	 
  
	car2=createSprite(100,600,50,50);
	car2.addImage(carImg);
	car2.scale=0.25;

	wall1=createSprite(500,900,50,50);
	 Engine.run(engine);
   //Render.run(render);  

}
// 

  function draw() {
  rectMode(CENTER);
  background("lightpink");
  
  wall1.display();

  if(keyDown("RIGHT_ARROW")){
	car2.velocityX=2;
	car2.velocityY=0;
}

if(keyDown("LEFT_ARROW")){
	car2.velocityX=-2;
	car2.velocityY=0;
}

if(keyDown("UP_ARROW")){
	car2.velocityX=0;
	car2.velocityY=-2;;
}



  car2.display();
  drawSprites();
 
 if(ground.x<400){  
	 ground.x=ground.width/2
 }
 
}


