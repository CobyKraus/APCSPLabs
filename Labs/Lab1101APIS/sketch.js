var data;
var barHeight;
function setup(){
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2,30);
  background(20);
  barHeight=20;
  loadJSON("population.json", gotData);
}
//function draw(){
  //useData();
//}
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
      if (data.countrydata.males[i] < data.countrydata.males[j]){
        var temp = data.countrydata.males[i];
        data.countrydata.males[i] = data.countrydata.males[j];
        data.countrydata.males[j] = temp
      }
    }
  }
}
