//  Global variables
var bars = [];

// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20,100);
  numBars = 40;
  LoadBars(numBars);
  bubbleSort(bars);
}
function LoadBars(numBars){
  for (var i=0;i<numBars;i++){
    var loc = createVector((wid*i),100);
    var wid = 800/numBars
    var hei = 100
    var blue = random(255);
    var clr = color(random(255),random(255),blue);
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
function bubbleSort(bars){

  for(var i = bars.length - 1; i >= 0; i-- ){
    //second for loop that goes from 0 to i
    for(var j = 0; j < i; j++ ){
      if (bars[i].blue<bars[j].blue){
        var temp = bars[i];
        bars[i] = bars[j];
        bars[j] = temp
      }
    }
  }
}
