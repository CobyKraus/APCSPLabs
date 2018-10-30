//  Global variables
var bars = [];

// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20,100);
  numBars = 40;
  LoadBars(numBars);
}
function LoadBars(numBars){
  for (var i=0;i<numBars;i++){
    var loc = createVector(100,100);
    var wid = 800/numBars
    var hei = 100
    var blue = random(0,255);
    var clr = (random(0,255),random(0,255),blue);
    var bar = new Bar(loc,wid,hei,clr);
    bars.push(bar);
  }
}
function draw(){
  noStroke();
  for (var i=0;i<numBars;i++){
    bars[i].render();
  }
}
