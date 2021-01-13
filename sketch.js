
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var ground,ball1,chain1,boy,bin1,bin2,bin3,mango1,mango2,mango3,mango4,mango5;
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
	mango1 = new Mango(700,370,50)
	mango2 = new Mango(780,370,50)
	mango3 = new Mango(820,370,50) 
	mango4 = new Mango(700,470,50)
	mango5 = new Mango(780,470,50)
	chain1 = new Chain(ball1.body,{x:235, y:500})
	bin1 = new Bin(800,645,10,100)
	bin2 = new Bin(850,670,100,10)
	bin3 = new Bin(900,645,10,100)
	
  
	Engine.run(engine)
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
 ground.display();
ball1.display();
chain1.display();
image(boy,200,440,200,300)
bin1.display();
	bin2.display();
	bin3.display();
  image(bin2.image,630,250,530,450);
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  detectollision(ball1,mango1)
  detectollision(ball1,mango2)
  detectollision(ball1,mango3)
  detectollision(ball1,mango4)
  detectollision(ball1,mango5)
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
function detectollision(Lstone,Lmango){
	mangoBodyPosition=Lmango.body.position 
	stoneBodyPosition=Lstone.body.position 

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
		if(distance<=Lmango.r+Lstone.r){
		Matter.Body.setStatic(Lmango.body,false)
	}
}



