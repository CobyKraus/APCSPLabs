// Global variables
var bl;
// put setup code here
function setup() {
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2, 30);
  background (20,20,20)
  bl = new Ball (random(width), random(height), random(15, 35), color (250,23,23));
}
function draw() {
  b1.run();
}
