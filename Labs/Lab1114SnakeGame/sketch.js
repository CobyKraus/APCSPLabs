//global variables
var w = 20;
var cols, rows;
var snake;
var food;
//creates canvas and sets the parameters of the snake
//make food not land on snake
function setup(){
  var cnv = createCanvas(800,800);
  cols = width/w;
  rows = height/w;
  cnv.position((windowWidth-width)/2,30);
  frameRate(10);
  background(0,0,0);
  snake = new Snake(createVector(width/2, height/2), createVector(0,0));
  food = new Food(createVector(random(40)*w, random(40)*w),w);
}
//snake is formed
function draw(){
  background(0,0,0);
  snake.run();
  food.run();
  newFood();
}
//tells the snake where to go based on which key is pressed
function keyPressed(){
  if(keyCode===UP_ARROW){
    snake.vel = createVector(0,-1*w);
  }
  if(keyCode===DOWN_ARROW){
    snake.vel = createVector(0,1*w);
  }
  if(keyCode===RIGHT_ARROW){
    snake.vel = createVector(1*w,0);
  }
  if(keyCode===LEFT_ARROW){
    snake.vel = createVector(-1*w,0);
  }
}
function newFood(){
  if (food.loc.x===snake.headloc.x &&
  food.loc.y===snake.headloc.y){
      food = new Food(createVector(random(40)*20, random(40)*20),w);
      snake.segments.length=snake.segments.length++
    }
 }
