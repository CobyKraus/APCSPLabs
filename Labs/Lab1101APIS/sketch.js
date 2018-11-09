var data;
var barHeight;
function setup(){
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2,30);
  background(20);
  barHeight=20;
  loadJSON("population.json", gotData);

}
function draw(){
  //useData();
  fill(0,255,0);
  for (var i = 0; i<data.countrydata.length; i++){
    map(data[i].countrydata.males);
    BubbleSort();
  }

}
function gotData(dataNew){
  data = dataNew;
}
/*
function useData(){
  if(data){
    BubbleSort();
    for(var i =0; i<;i++){


    }
  }
}
*/
function BubbleSort(){
  var length = data.countrydata.length;
  for(var i = length - 1; i >= 0; i-- ){
    //second for loop that goes from 0 to i
    for(var j = 0; j < i; j++ ){
      if (data[i].countrydata.males < data[j].countrydata.males){
        var temp = data[i].countrydata.males;
        data[i].countrydata.males = data[j].countrydata.males;
        data[j].countrydata.males = temp
      }
    }
  }
}
