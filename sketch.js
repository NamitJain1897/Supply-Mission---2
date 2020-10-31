var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;
	rectMode(CENTER);
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box1 = new Box (width/2,640,200,20);
	
    box2 = new Box (300,640,20,100);
    
	box3 = new Box (500,640,20,100);
	


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
box1Sprite = createSprite(width/2,640,200,20);
box1Sprite.shapeColor = "red";
box2Sprite = createSprite(300,640,20,100);
box2Sprite.shapeColor = "red";
box3Sprite = createSprite(500,640,20,100);
box3Sprite.shapeColor = "red";
	 World.add(world, ground);
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 
 box1.display();
 box2.display();
 box3.display();

 box1Sprite.x = box1.position.x
 box1Sprite.y = box1.position.y
 box2Sprite.x = box2.position.x
 box2Sprite.y = box2.position.y
 box3Sprite.x = box3.position.x
 box3Sprite.y = box3.position.y
 
 
 drawSprites();
  
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   // Matter.Body.applyForce(packageBody.body,packageBody.body.position,{x:400,y:645});
   
	
	Matter.Body.setStatic(packageBody,false);
  }
}



