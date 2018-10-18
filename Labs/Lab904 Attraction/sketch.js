//  Global variables
var balls = [];
var redBall;
// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  loadBalls(200);  //  !!!!!!!!!!  this is a function call
}

function draw() {
	background(20,20,20, 30);
	redBall.run();
	

}

function loadBalls(numBalls){

}
