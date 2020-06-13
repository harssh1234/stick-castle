var ground;
var square1;
var smallSquare1,smallSquare2;
var tinySquare1,tinySquare2,tinySquare3,tinySquare4;

function setup() {
  createCanvas(800,400);
  ground = createSprite(400,380,800,10);
  square1 = createSprite(400,275,200,200);
  smallSquare1 = createSprite(250,325,100,100);
  smallSquare1 = createSprite(550,325,100,100);
  tinySquare1 = createSprite(325,150,50,50);
  tinySquare2 = createSprite(475,150,50,50);
  tinySquare3 = createSprite(225,250,50,50);
  tinySquare4 = createSprite(575,250,50,50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}