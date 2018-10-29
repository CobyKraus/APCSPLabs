//  Global variables
var bars = [];

// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
}
function ColorBars(){
  for (var i=0;i<=Canvas.length/100;i++){
    fill(random(0,255),random(0,255),random(0,255));
    bars.push(new Bar(bar.length, bar.width));
  }
}
