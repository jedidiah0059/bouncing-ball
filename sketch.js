const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ball, edge1, edge2, edge3, edge4;

var T1, T2, T3, T4; 

function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;

  var T1_options = {
    isStatic : true
  };
  T1 = Bodies.rectangle(170, height - 60, 390, 40, T1_options);
  World.add(world, T1);

  var T2_options = {
    isStatic : true
  };
  T2 = Bodies.rectangle(570, height - 60, 390, 40, T2_options);
  World.add(world, T2);

  var T3_options = {
    isStatic : true
  };
  T3 = Bodies.rectangle(970, height - 60, 390, 40, T3_options);
  World.add(world, T3);

  var T4_options = {
    isStatic : true
  };
  T4 = Bodies.rectangle(1370, height - 60, 390, 40, T4_options);
  World.add(world, T4);

  var edge1_options = {
    isStatic : true
  };
  edge1 = Bodies.rectangle(-5, height / 2, 5, height, edge1_options);
  World.add(world, edge1);

  var edge2_options = {
    isStatic : true
  };
  edge2 = Bodies.rectangle(width + 5, height / 2, 5, height, edge2_options);
  World.add(world, edge2);

  var edge3_options = {
    isStatic : true
  };
  edge3 = Bodies.rectangle(width / 2, -5500, width, 10000, edge3_options);
  World.add(world, edge3);

  var edge4_options = {
    isStatic : true
  };
  edge4 = Bodies.rectangle(width / 2, height + 5, width, 5, edge4_options);
  World.add(world, edge4);


  var ball_options = {
    restitution : 1.8
  };
  ball = Bodies.circle(width / 2, height / 2, 20, ball_options);
  World.add(world, ball);

}

console.log(world, ball);

function draw() {

  Engine.update(engine);

  background(0, 0,255);

  rectMode(CENTER);
  rect(edge1.position.x, edge1.position.y, 5, height);

  //rectMode(CENTER);
  rect(edge2.position.x, edge2.position.y, 5, height);

  //rectMode(CENTER);
  rect(edge3.position.x, edge3.position.y, width, 10000);

  //rectMode(CENTER);
  rect(edge4.position.x, edge4.position.y,  width, 5);
  fill("red");
  rect(T1.position.x, T1.position.y,  390, 40);

  fill("blue");
  rect(T2.position.x, T2.position.y,  390, 40);

  fill("orange");
  rect(T3.position.x, T3.position.y,  390, 40);

  fill("green");
  rect(T4.position.x, T4.position.y,  390, 40);

  fill("white");
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);

  if(isTouching(T1, ball)){
    fill("red");
    fill("red");
  }
  else{}

  if(isTouching(T2, ball)){
    fill("blue");
    fill("blue");
  }
  else{}

  if(isTouching(T3, ball)){
    fill("orange");
    fill("orange");
  }
  else{}

  if(isTouching(T4, ball)){
    fill("green");
  }
  else{}

}