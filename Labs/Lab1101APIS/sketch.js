var data;
var myArray;
//preload a large file
function preload(){
  data = loadJSON("senators.json");
}
function setup(){
  myArray=data.objects
  console.log(myArray);
}

function BubbleSort(){
  var length = txt.length
  for(var i = length - 1; i >= 0; i-- ){
  //second for loop that goes from 0 to i
  for(var j = 0; j < i; j++ ){
    if (txt[i].person.lastname<txt[j].person.lastname){
      var temp = txt[i].person.lastname;
      txt[i].person.lastname = txt[j].person.lastname;
      txt[j].person.lastname = temp
    }
  }
}
}
