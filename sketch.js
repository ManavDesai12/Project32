const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var drop;
var drops = [];
var maxDrops = 100
var ledge1;
var score = 0;
function preload(){
    
}

function setup(){
   createCanvas(400, 400);
   engine = Engine.create();
   world = engine.world;
    ledge1 = new ledge(200, 350, 100, 20);
    drops = new Drops(random(0,400), random(0,0));
      
 
    
}

function draw(){
    Engine.update(engine);
    background("black");
    drops.display();
    drops.update();
    ledge1.display();
    if(ledge1.body.position.y === drops.body.position.y && ledge1.body.position.x === drops.body.position.x ){
      //drops.body.setPosition(random(0,400), 0);
      Matter.Body.setPosition(drops.body, {x: random(0,400), y:0 })
      score++

  }
  text("Your Score is: " + score, 180, 20);

}
 

