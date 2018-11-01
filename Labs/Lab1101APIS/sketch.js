var data;
var barHeight;
//preload a large file
function preload(){
  data = loadJSON("weather.json");
}
function setup(){
  console.log(data.countries[0]);
}
