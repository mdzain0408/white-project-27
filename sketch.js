
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(550, 750);


	engine = Engine.create();
	world = engine.world;


	bob1 = new bob(225,370,20);
	bob2 = new bob(266,370,20);
	bob3 = new bob(307,370,20);
	bob4 = new bob(184,370,20);
	bob5 = new bob(143,370,20);
	roofN = new roof(226,100,230,20);

	rope1 = new rope(bob1.body,roofN.body,0,0)
	rope2 = new rope(bob2.body,roofN.body,41,0)
	rope3 = new rope(bob3.body,roofN.body,82,0)
	rope4 = new rope(bob4.body,roofN.body,-41,0)
	rope5 = new rope(bob5.body,roofN.body,-81,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roofN.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed(){

if (keyCode === 38){

Matter.Body.applyForce(bob4.body,bob4.body.position,{x:-100,y:-30})


}


}



