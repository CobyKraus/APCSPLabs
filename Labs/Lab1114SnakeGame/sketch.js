//global variables
var w = 20;
var col, rows;
var snake;
var food;
//creates canvas and sets the parameters of the snake
//make food not land on snake
function setup(){
  var cnv = createCanvas(800,800);
  cols = width/w;
  rows = height/w;
  cnv.position((windowWidth-width)/2,30);
  frameRate(100);
  background(0,0,0);
  snake = new Snake(createVector(width/2, height/2), createVector(1,0));
  food = new Food(createVector(random(0,800),random(0,800)),20);
}
//snake is formed
function draw(){
  snake.run();
  food.run();
  if (food.loc.x===snake.loc.x && food.loc.y===snake.loc.y){
    snake.length+=1;
  }
}
//tells the snake where to go based on which key is pressed
function keyPressed(){
  if(keyCode===UP_ARROW){
    snake.vel = createVector(0,-1);
  }
  if(keyCode===DOWN_ARROW){
    snake.vel = createVector(0,1);
  }
  if(keyCode===RIGHT_ARROW){
    snake.vel = createVector(1,0);
  }
  if(keyCode===LEFT_ARROW){
    snake.vel = createVector(-1,0);
  }
}
