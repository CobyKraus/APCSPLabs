//  Global variables

var balls = [];
var square;
var score = 0;
// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20); //draws canvas
  //calls for a certain number of balls
  loadBalls(50);  //  !!!!!!!!!!  this is a function call
  //creates the paddle
  square = new Square(createVector(0, 0),
                      33,
                      color(random(255),random(255),random(255)))
  }

//makes paddle appear and move
function draw() {
  background(20,20,20);
  square.run();
  //prints balls and makes balls move
  for(var i = 0; i < balls.length; i = i + 1){
    balls[i].run();
  }
  for(var score = 0; score<500; score++){
    text("Score: "+ 30, 30, 30);
 }
  if (score >= 30){
    textSize(50);
    text("Congratulations you win!")
  }

  //check for collision detection and splice

  for (var i = 0; i < balls.length; i++){
    if (balls[i].loc.x>(square.loc.x) &&
    balls[i].loc.x < (square.loc.x + square.w) &&
    balls[i].loc.y>(square.loc.y) &&
    balls[i].loc.y<(square.loc.y + square.h)){
      balls.splice(i, 1)// remove one element at index i
      if (balls[i].vel>0){
        
      }

    }
  }
}
//prints and creates multiple balls
function loadBalls(numBalls){

    for(var i = 0; i < numBalls; i++){
        var loc = createVector(random(width), random(height)/8);
        var vel = createVector(random(-3,3), random(-3,3));
        var radius = random(20,40);
        var col = color(random(255), random(255), random(255));

        balls.push(new Ball(loc, vel, radius, col));

    }
  }
