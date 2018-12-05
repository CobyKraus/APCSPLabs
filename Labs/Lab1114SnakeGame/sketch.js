//global variables
var w = 20;
var cols, rows;
var snake;
var food;
var score = 0;
//creates canvas and sets the parameters of the snake
//make food not land on snake
function setup(){
  var cnv = createCanvas(800,800);
  cols = width/w;
  rows = height/w;
  cnv.position((windowWidth-width)/2,30);
  frameRate(10);
  background(0,0,0);

  snake = new Snake(createVector(floor(width/2), floor(height/2)));
  var fx = floor(random(cols))
  var fy = floor(random(rows))
  food = new Food(createVector(fx*w, fy*w));

}
//snake is formed
function draw(){
  background(0,0,0);
  snake.run();
  food.run();
  fill(0,0,255)
  textSize(20);
  text(score, 100, 100);
  if(snake.headloc.x === width-w || snake.headloc.x===20 || snake.headloc.y === 20 || snake.headloc.y === height-w){
    console.log("wow");
  }
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
  var fx = floor(random(cols))
  var fy = floor(random(rows))
  food = new Food(createVector(fx*w, fy*w));



 }
//
