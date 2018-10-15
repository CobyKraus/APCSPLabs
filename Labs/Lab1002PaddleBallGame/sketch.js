//  Global variables

var balls = [];
var square
var scoreElem;
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
  //check for collision detection and splice
  for (var i = 0; i < balls.length; i++){
    var x = balls[i];
    var y = square.loc;
    var z = x.loc;
    //returns the distance between two objects
    var dist = y.dist(z);
    if (this.loc.x>paddle.loc.x
        && this.loc.x < paddle.loc.x + paddle.loc.width
        && this.loc.y<paddle.loc.y
        && this.loc.y+this.height<paddle.loc.height){
      balls.splice(i, 1)// remove one element at index i

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
