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
  loadBalls(2);  //  !!!!!!!!!!  this is a function call
  //creates the paddle
  square = new Square(createVector(0, 0),
                      33,
                      color(random(255),random(255),random(255)))
  scoreElem = createDiv('Score = 0' );
  scoreElem.position(80, 40);
  scoreElem.id = 'score';
  scoreElem.style('color', 'white');

}

//makes paddle appear and move
function draw() {
  background(20,20,20);
  square.run();
  //prints balls and makes balls move
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
    if(dist<=50){
      scoreElem++;
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
function Score(){
  if (balls[balls.length - 1]===square.loc) {
    var prevScore = parseInt(scoreElem.html().substring(8));
    scoreElem.html('Score = ' + (prevScore + 1));
  }
}
