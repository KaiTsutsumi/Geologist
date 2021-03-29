const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var hammer, ground, stone, r1, r2, r3, r4;

function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;

    hammer = new Hammer();
    stone = new Stone(300,500,40,40);
    r1 = new Rubber(200,500);
    r2 = new Rubber(210,400);
    r3 = new Rubber(220,550);
    r4 = new Rubber(230,640);

   
    ground = new Ground(400,690,800,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    
	hammer.display();
	stone.display();
    ground.display();
    r1.display();
    r2.display();
    r3.display();
    r4.display();

}