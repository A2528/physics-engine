const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box;
var ball;
var ball1;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    var box_options ={
   restitution:0.8
    }

box = Bodies.rectangle(100,200,100,100,box_options);
World.add(world,box);
    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    var circle_options={
        restitution:1
    }
ball=Bodies.circle(200,200,50,circle_options)
World.add(world,ball);
    console.log(ground);

var ball_options={
    restitution:2
}
ball1=Bodies.circle(300,200,50,ball_options)
World.add(world,ball1);
}
function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    rect(box.position.x,box.position.y,100,100);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,50,50);
    ellipseMode(RADIUS);
    ellipse(ball1.position.x,ball1.position.y,50,50);
}