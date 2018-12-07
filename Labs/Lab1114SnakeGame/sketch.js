//global variables
var w = 20;
var cols, rows;
var snake;
var food;
var start = "true";
var score = 0;
var img;
function preload(){
  img = loadImage('hqdefault.jpg')
}
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
  startGame();
  fill(0,0,255)
  textSize(20);
  text(score, 100, 100);
  if(snake.headloc.x === width-w || snake.headloc.x===20 || snake.headloc.y === 20 || snake.headloc.y === height-w){
    food.loc.x=1000;
    food.loc.y=1000;
    start="true";
    endGame();
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
  if (keyCode===32){
    start="false";
  }
}
function newFood(){
  var fx = floor(random(cols))
  var fy = floor(random(rows))
  food = new Food(createVector(fx*w, fy*w));



 }
 function startGame(){
    if(start==="true" && score===0){
      image(img,200,200)
      textFont();
      fill(0,0,255);
      textAlign(CENTER);
      textSize(50);
      text("Snake.  Press space to start",400,300)
   }
 }
 function endGame(){
   if (start==="true"){
      image(img,200,200)
      textFont();
      fill(0,0,255);
      textAlign(CENTER);
      textSize(50);
      text("Game over. Your score was " + score,400,300)
   }
 }

//
