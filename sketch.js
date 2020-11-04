
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper
var ground
var dustbin1,dustbin2,dustbin3
function preload()
{
	
}

function setup() {
	createCanvas(800, 300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,250,50,50);
	ground = new Ground(400,290,800,50);
	dustbin1 = new Dustbin(700,215,10,100);
	dustbin2 = new Dustbin(650,260,100,10);
    dustbin3 = new Dustbin(600,215,10,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
	
  keyPressed()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:-15});
	}
}


