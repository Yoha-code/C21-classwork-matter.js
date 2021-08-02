const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground, ball;
var left;
var right;
var top_wall;
var up, Right;

function setup() {
  createCanvas(800, 800);
 
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,360,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,360,20);

  up = createImg("up.png");
  up.position(25, 25);
  up.size(50, 50);
  up.mouseClicked(vForce);

  Right = createImg("right.png");
  Right.position(100, 25);
  Right.size(50, 50);
  Right.mouseClicked(hForce);

  var options = {
    restitution : 0.95
  }
  
  ball = Bodies.circle(200, 200, 20, options);
  World.add(world, ball);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function vForce(){
  Matter.Body.applyForce(ball, {x: 0, y: 0}, {x: 0, y: -0.05});
}

function hForce(){
  Matter.Body.applyForce(ball, {x: 0, y: 0}, {x: 0.05 , y: 0});
}

function draw() 
{
  background(51);
  
  ground.show();
  top_wall.show();
  left.show();
  right.show();

  ellipse(ball.position.x, ball.position.y, 20);
  
  Engine.update(engine);
}

