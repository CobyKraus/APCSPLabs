//  Global variables

var balls = [];
var square
// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  loadBalls(20);  //  !!!!!!!!!!  this is a function call
  square = new Square(createVector(0, 0),
                      33,
                      color(random(255),random(255),random(255)))

}

function draw() {
  background(20,20,20);
  square.run();
  for(var i = 0; i < balls.length; i = i + 1){
    balls[i].run();
  }
  for (var i = 0; i < balls.length; i++){
    var x = balls[i];
    var y = square.loc;
    var z = x.loc;
    //returns the distance between two objects
    var dist = y.dist(z);
    if (dist <= 50){
    balls.splice(i, 1)// remove one element at index i
    }
  }
}

function loadBalls(numBalls){

    for(var i = 0; i < numBalls; i++){
        var loc = createVector(random(width), random(height));
        var vel = createVector(random(-3,3), random(-3,3));
        var radius = random(20,40);
        var col = color(random(255), random(255), random(255));

        balls.push(new Ball(loc, vel, radius, col));

    }

}
