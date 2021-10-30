const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;

var canvas, angle, tower, ground, cannon;
var cannonImage
var backgroundImg
var cannonImg_2

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
  cannonImage = loadImage("./assets/cannonBase.png");
  cannonImg_2 = loadImage("./assets/canon.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, 580, 1200, 20, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);

  cannon = new Cannon(160, 150, 200, 200, angle);
}

function draw() {
 background(backgroundImg)
  Engine.update(engine);

  
  rect(ground.position.x, ground.position.y, width * 2, 1);
  
cannon.display()

  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop();  
}
