//  Global variables
var boids = [];
var redBall;
// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  loadBoids(50);  //  !!!!!!!!!!  this is a function call

  redBall = new Ball(createVector(0, 0),
                      33,
                      color(random(255),random(255),random(255)))
  //returns the distance between two objects
  if (var i=0; i<==loadBoids; i++){
    //returns the distance between two objects
    var dist = vector1.dist(vector2);
    boids.splice(i, 1)// remove one element at index i
  }
}

function draw() {
	background(20,20,20, 250);
	redBall.run();
	for(var i = 0; i < boids.length; i++){
		boids[i].run();

  }

}

function loadBoids(numBoids){

    for(var i = 0; i < numBoids; i++){
        var loc = createVector(random(width), random(height));
        var vel = createVector(random(-3,3), random(-3,3));
        var clr = color(random(255), random(255), random(255));

        boids.push(new Boid(loc, vel, 15, clr ));

    }
/*
var loc = createVector(width/2, height/2);
var vel = createVector(random(-.3,.3), random(-.3,.3));
var radius = 55;
var col = color(255,0,0);
*/

}
