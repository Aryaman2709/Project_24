
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1600, 400);
	background("black")
	engine = Engine.create();
    world = engine.world;
	
	paper1 = new Paper(100,100,20) 
	box1 =new Dustbin(1300,370,200,20);
	box2 = new Dustbin(1200,340,20,125);
	box3 = new Dustbin(1400,340,20,125);

	ground = Bodies.rectangle(800,390,1600,20,{isStatic:true})
	World.add(world, ground);


	//Create the Bodies Here.
   


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper1.display();
  box1.display();
  box2.display();
  box3.display();
  rectMode(CENTER);
  fill("yellow");
  rect(ground.position.x, ground.position.y, 1600,20);
  keyPressed();
}

function keyPressed(){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(paper1.body, paper1.body.position,{x:5, y:-5});
	}
}