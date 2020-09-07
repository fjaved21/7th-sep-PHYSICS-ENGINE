const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var boggie1,boggie2;
var ground;

var bg;

function preload(){
  bg = loadImage("images/bg.png");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;
ground = new Ground(600,380,1200,20);
boggie1= new Boggie(50,370,50,50);
boggie2 = new Boggie(150,370,50,50);
  boggie3 = new Boggie(250,370,50,50);
  boggie4 = new Boggie(350,370,50,50);
  boggie5 = new Boggie(450,370,50,50);
  boggie6 = new Boggie(550,370,50,50);


  
}

function draw() {
  background(bg);  
  Engine.update(myEngine);

  boggie1.show();
  boggie2.show();
  boggie3.show();
  boggie4.show();
  boggie5.show();
  boggie6.show();


  ground.show();


 
}