var data;
var myArray;


function setup(){
  loadJSON("file://///10.7.1.51/E17%20share%20folder/Principles/populationData/population.json", gotData, "jsonp");
}

function gotData(dataNew){
  data = dataNew;
}
function BubbleSort(){
  var length = txt.length
  for(var i = length - 1; i >= 0; i-- ){
    //second for loop that goes from 0 to i
    for(var j = 0; j < i; j++ ){
      if (txt[i].population.males<txt[j].population.males){
        var temp = txt[i].person.lastname;
        txt[i].population.males = txt[j].population.males;
        txt[j].population.males = temp
      }
    }
  }
}
