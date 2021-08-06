const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var ball;
var b2;
var b3;
var b4;
var b5;
var r1;
var r2;
var r3;
var r4;
var r5;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	var ball_options = {
	  isStatic: false,
	  restitution : 1,
	  friction :0,
	  density : 0.8
    }

    ball = Bodies.circle(340, 250, 20, ball_options);
	World.add(world, ball);
    b2 = Bodies.circle(370, 250, 20, ball_options);
	World.add(world,b2);
	b3 = Bodies.circle(400, 250, 20, ball_options);
	World.add(world,b3);
	b4 = Bodies.circle(430, 250, 20, ball_options);
    World.add(world,b4);
	b5 = Bodies.circle(460, 250, 20, ball_options);
	World.add(world,b5);

	roof = Bodies.rectangle(400,100,100,20,roof_options);
    World.add(world,roof);

	r1 = new rope(ball,roof,-80,0)
	Engine.run(engine);
	r2 = new rope(b2,roof,-40,0)
	r3 = new rope(b3,roof,0,0)
	r4 = new rope(b4,roof,40,0)
	r5 = new rope(b5,roof,80,0)
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,160,20);

  //call display() to show ropes here 
  r1.display()
  r2.display()
  r3.display()
  r4.display()
  r5.display()
  //create ellipse shape for multiple bobs here
  ellipse(ball.position.x, ball.position.y, 40);
  ellipse(b2.position.x, b2.position.y, 40);
  ellipse(b3.position.x, b3.position.y, 40);
  ellipse(b4.position.x, b4.position.y, 40);
  ellipse(b5.position.x, b5.position.y, 40);
  text("LEFT ARROW TO APPLY FORCE",300,50)
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed() {
	if (keyCode == LEFT_ARROW) {
	  Matter.Body.applyForce(ball, { x: ball.position.x , y: ball.position.y }, { x: -50, y: 0 });
	}
  }