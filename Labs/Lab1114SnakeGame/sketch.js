//global variables
var w = 20;
var cols, rows;
var snake;
var food;

var score = 0;
var img;
var end = "false"
var start = "true";

var gameState = 1;
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

  if(gameState === 1){
    startGame();
  }else if(gameState === 2){
    playGame();
  }else if(gameState === 3){
    endGame();
  }else{
    console.log("What up?");
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
 function startGame(){//  splash screen
    if(start==="true" && score===0){
      image(img,200,200)
      textFont();
      fill(0,0,255);
      textAlign(CENTER);
      textSize(50);
      text("Snake.  Press space to start",400,300)
   }
 }

 functionn playGame(){//  playing the game

   background(0,0,0);
   snake.run();
   food.run();
   //startGame();
   fill(0,0,255)
   textSize(20);
   text(score, 100, 100);
 }
 // end splash screen
 function endGame(){
   if (end === "true"){
      image(img,200,200)
      textFont();
      fill(0,0,255);
      textAlign(CENTER);
      textSize(50);
      text("Game over. Your score was " + score,400,300)
   }
 }
 function toEndGame(){
   if(snake.headloc.x === width-w || snake.headloc.x===w || snake.headloc.y === w || snake.headloc.y === height-w){
     food.loc.x=1000;
     food.loc.y=1000;
     end="true";
     endGame();
   }
 }

//
