
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var ground,ball1,chain1,boy;
function preload()
{
	boy = loadImage("boy.png")
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ground = new Ground(800,680,1600,20)
	ball1 = new Ball(235,420,45)
	chain1 = new Chain(ball1.body,{x:235, y:420})
	
	Engine.run(engine)
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
 ground.display();
ball1.display();
chain1.display();
image(boy,200,240,200,300)

}
function mouseDragged(){
	// if (gameState!=="launched"){
		 Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
	// }
 }
 
 
 function mouseReleased(){
	 chain1.fly();
	// gameState = "launched";
 }
 
 function keyPressed(){
	 if(keyCode === 32){
		chain1.attach(ball1.body);
	 }
 }



